export async function fetchGoogle(query, api = null) {
    console.log("Proceeding Google");

    const apiKeys = [
        process.env.GOOGLE_SEARCH_API,
        process.env.GOOGLE_SEARCH_API_2,
    ];
    const cx = [process.env.GOOGLE_SEARCH_CX, process.env.GOOGLE_SEARCH_CX_2];

    if (!query) {
        console.log('Missing query');
        return { error: 'Missing query' };
    }

    // Function to perform the search request
    const fetchResults = async (apiKey, cx, start = 1) => {
        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}&start=${start}&safe=active&gl=id`;
        const res = await fetch(url);
        const data = await res.json();
        return { data, url };
    };

    let result = null;
    let selectedApiKey = null;
    let selectedCx = null;

    // Try each API key until one works
    for (const [index, apiKey] of apiKeys.entries()) {
        try {
            const { data, url } = await fetchResults(apiKey, cx[index]);
            console.log("Using API Key:", apiKey);
            console.log("URL:", url);

            // Check for quota error
            if (data?.error?.message?.includes("Quota exceeded")) {
                console.warn("Quota exceeded, trying next API key...");
                continue;
            }

            // Any other error
            if (data?.error) {
                return { error: data.error.message };
            }

            selectedApiKey = apiKey;
            selectedCx = cx[index]
            result = data;
            break;
        } catch (err) {
            console.error("Fetch failed:", err);
        }
    }

    if (!result) {
        return { error: "Failed to fetch search results" };
    }

    let dataToReturn = result?.items?.map(o => ({
        title: o.title,
        source: o.displayLink,
        snippet: o.snippet,
        link: o.link,
    })) || [];

    // If too few results, try page 2
    if (dataToReturn.length < 5 && selectedApiKey) {
        try {
            const { data: data2 } = await fetchResults(selectedApiKey, selectedCx, 10);
            const extra = data2?.items
                ?.filter(o => {
                    const domain = o.displayLink?.toLowerCase();
                    const blockedDomains = [
                        "reddit.com", "youtube.com", "facebook.com", "twitter.com",
                        "instagram.com", "tiktok.com", "pinterest.com", "quora.com", "github.com"
                    ];
                    return domain && !blockedDomains.includes(domain);
                })
                .map(o => ({
                    title: o.title,
                    source: o.displayLink,
                    snippet: o.snippet,
                    link: o.link,
                })) || [];

            dataToReturn = [...dataToReturn, ...extra];
        } catch (err) {
            console.error("Failed to fetch second page:", err);
        }
    }

    return dataToReturn;
}
