import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import RocketList from "./components/RocketList";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetRockets {
        rockets(limit: 10) {
          id
        }
      }
    `,
  })
  .then((result) => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App"></div>
      <RocketList />
    </ApolloProvider>
  );
}

export default App;
