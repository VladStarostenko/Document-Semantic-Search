export const searchInWiki = async (value: string) => {
    const results = await fetch(`https://pl.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=50&srsearch=${value}`)
    const resultsJson = await results.json();
    const resultArray: object[] = [];
    resultsJson.query.search.forEach((result: any, index: number) => {
        const resultObject = {
            "id": index,
            "name": result.title,
            "link": `https://pl.wikipedia.org/?curid=${result.pageid}`
        }
        resultArray.push(resultObject);
    })
    return resultArray;
}
