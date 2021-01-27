export const searchInWiki = async (value: string) => {
  const results = await fetch(
    `https://pl.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${value}`
  );
  const resultsJson = await results.json();
  const resultArray: object[] = [];
  resultsJson.query.search.forEach((result: any, index: number) => {
    const resultObject = {
      id: index,
      name: result.title,
      link: `https://pl.wikipedia.org/?curid=${result.pageid}`,
      snippet: result.snippet,
    };
    resultArray.push(resultObject);
  });
  return { list: resultArray, total: resultsJson.query.searchinfo.totalhits };
};

export const getKeyPhrases = async (text: string) => {
  return fetch(
    "https://westeurope.api.cognitive.microsoft.com/text/analytics/v2.1/keyPhrases",
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": process.env.OCP_APIM_KEY || "",
      },
      body: JSON.stringify({
        documents: [
          {
            language: "pl",
            id: "1",
            text: text,
          },
        ],
      }),
    }
  ).then(function (response) {
    return response.json();
  });
};
