

export const fetchGoogle = async (query) => {
    console.log("proceeding gogle")
    const apiKey = process.env.GOOGLE_SEARCH_API;
    const cx = process.env.GOOGLE_SEARCH_CX;

    if (!query) {
        console.log('Missing query')
        return { error: 'Missing query' };
    }

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}&start=1&safe=active&gl=id`;
    console.log(url)
    console.log(query)
    try {
        const res = await fetch(url);
        const data = await res.json();
        let dataToReturn = data.items
            .map(o => {
                return {
                    title: o.title,
                    source: o.displayLink,
                    snippet: o.snippet,
                    link: o.link,
                };
            });

        console.log(dataToReturn);
        if (dataToReturn?.length < 5) {

            const url2 = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}&start=10&safe=active&gl=id`;
            const res2 = await fetch(url2);
            const data2 = await res2.json();

            dataToReturn = [
                ...dataToReturn,
                ...data2.items
                    ?.filter(o => {
                        const domain = o.displayLink?.toLowerCase();
                        const blockedDomains = [
                            "reddit.com",
                            "www.reddit.com",
                            "youtube.com",
                            "www.youtube.com",
                            "facebook.com",
                            "twitter.com",
                            "instagram.com",
                            "tiktok.com",
                            "pinterest.com",
                            "quora.com",
                            "github.com"
                        ];
                        return domain && !blockedDomains.includes(domain);
                    })
                    .map(o => ({
                        title: o.title,
                        source: o.displayLink,
                        snippet: o.snippet,
                        link: o.link,
                    })) || [],
            ];
        }


        if (data.error) {
            return { error: data.error.message };
        }

        return dataToReturn;
    } catch (error) {
        console.log(error)
        return { error: 'Failed to fetch search results' };
    }
}