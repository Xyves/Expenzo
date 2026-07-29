"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

export default function Providers({ children }) {
  return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </Provider>
  );
}