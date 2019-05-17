const typeDefs = `
type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    posts: [Post!]!
}

input UserInput {
    username: String
    email: String
    password: String
}

type Post {
    id: ID!
    message: String!
    author: User!
}

input PostInput {
    message: String!
}

input LoginInput {
    email: String!
    password: String!
}

type AuthPayload {
    token: String
    user: User
}

type RootQuery {
    user(id: ID!): User
    users: [User]
    post(id: ID!): Post
    posts: [Post]
    me: User
}

type RootMutation {
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): User
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletePost(id: ID!): Post
    login(input: LoginInput!): AuthPayload
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`;

module.exports = typeDefs;