import ApolloClient from 'apollo-boost';

let bearerToken: string;
 
export default new ApolloClient({ 
    uri: 'http://localhost:3333/graphql', // process.env.DEV_URL,
    // request: (operation) => {
    //     operation.setContext(({ headers = {}}) => ({
    //         headers,
    //         authorization: `Bearer ${bearerToken}`
    //     }));
    // }
});
