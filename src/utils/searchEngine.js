import { getPages } from './crawler';

export function search(query) {
    console.log("processing query: ", query)
    const lowerQ = query.toLowerCase();
    return getPages()
        .filter((p) => p.text.toLowerCase().includes(lowerQ))
        .map((p) => {
            console.log("processing: ", p)
            return {
                url: p.url,
                snippet: p.text.slice(0, 200) + '...',
            }
        });
}
