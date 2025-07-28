"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4100/graphql" }),
  cache: new InMemoryCache(),
});
export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
  );
}
