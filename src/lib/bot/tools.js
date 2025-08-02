export async function usingTOols(tool, keywords, userInput = null, current_time) {
    if (tool === "scientific-journal-search") {
        const result = await fetchFromNeliti(keywords);
        return { content: "", data: result };
    } else if (tool === "web-search") {
        const query = keywords;
        console.log("query: ", query)
        const googled = await fetchGoogle(query)
        return {
            content: "",
            data: [],
        }
    }

    return null;
}