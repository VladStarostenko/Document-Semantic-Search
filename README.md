# Document-Semantic-Search

## Description
Implementing a semantic search on a set of documents in Polish (data set - Polish-language Wikipedia corpus).  The engine will search for text fragments from documents.

## Technological stack

For web aplication: 

- TypeScript
- React JS
- Wiki API for searching

For AI: 

- Azure
- Azure Cognitive Search


## Description of functionality

* Our app will provide semantic search. 
* The search will be conducted in Polish. 
* The database will be the Polish Wikipedia.

The user submits a query in the search bar, and our app gives him the answers found in the Polish Wikipedia.


## Conseption of semantic search 

![Conseption](https://github.com/VladStarostenko/Document-Semantic-Search/blob/main/Semantic-Search.png)


## How it works from a technical point of view?

![HowItWork](https://github.com/VladStarostenko/Document-Semantic-Search/blob/main/Conseption.png)


## Description of out solution

### How does our app work?

- The user enters the request.
- The application sends this request to the Azure Cognitive Search Service.
- The Azure Cognitive Search Service returns the key phrases of this request.
- The application sends a request to the Wikipedia with key phrases from the Service's responce.
- Wikipedia returns search results.
- The app displays the search results on the screen.

### How to run the app?

- Generate "Ocp-Apim-Subscription-Key" key for Azure Cognitive Search Service. 
- Insert this key in the code or in the ENV variable.
- Go to the Semantic-Search folder. 
- Run `yarn` to install the dependencies
- Run `yarn start`
- Go to `localhost:3000`

### Examples of queries

- Najbogatszy człowiek świata
- Najwieksza korporacja świata
- Kto jest deryktorem tesla
- Kiedy się skończyła druga wojna światowa
- Najdroższy samochów w świcie
- Kto jest najbogatszym człowiekiem na świecie
- Ile mieszkańców w polsce


## Sequence Diagram

![Sequence diagram](https://github.com/VladStarostenko/Document-Semantic-Search/blob/main/SequenceDiagram.png)



## Timetable
|  NR  | Data      | Tasks                                                        |
| ---- | --------- | ------------------------------------------------------------ |
|  P1  |19.11.2020 | Brainstorming: Requirements gathering, Architecture, Scrum   |
|  P2  |26.11.2020 | Init Github Repo, write documentation, Artifacts, supported Timetable, Plan architecture |
|  P3  |10.12.2020 | Full functionality description, full technology stack, architecture, timetable |
|  P4  |07.01.2020 | Creating a search page in the selected technology, connecting the api to the frontend, creating the first version of the search engine |
|  P5  |14.01.2020 | Make the full functionality of the project |
|  P6  |21.01.2020 | Fix bugs and write tests |
|  P7  |28.01.2020 | Create video and project presentation |
