const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        author: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
        bookId: ID
    }

    input BookInput {
        author: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
        bookId: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
    }
    
    type Mutation {
        login(email: String, password: String):Auth
        addUser(username: String, email: String, password: String):Auth
        saveBook(bookData: BookInput):User
        removeBook(bookId: ID):User
    }
`

module.exports = typeDefs;