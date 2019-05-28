import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:9000/graphql',
    options: {
        reconnect: true,
    }
})

const httpLink = createHttpLink({
    uri: 'http://localhost:9000/graphql',
    credentials: 'include'
});

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

export default client;