import { React } from "react";
import * as ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import { client } from "./graphql";

// const client = new ApolloClient({
//   uri: 'https://api.spacex.land/graphql/',
//   cache: new InMemoryCache(),
// });

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <ApolloProvider client={client}>
  <App />
  //{ </ApolloProvider>, }
);
