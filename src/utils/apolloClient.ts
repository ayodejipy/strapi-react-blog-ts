import { ApolloClient, InMemoryCache, } from "@apollo/client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";

const cache: InMemoryCache = new InMemoryCache();
// const link: HttpLink = new HttpLink({
//     uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
// });

const client = new ApolloClient({
    cache,
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
})


export default client;