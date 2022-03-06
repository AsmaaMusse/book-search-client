import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation($user: AddUserInput!) {
    addUser(user: $user) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVEBOOK = gql`
  mutation Mutation($book: SaveBookInput!) {
    saveBook(book: $book) {
      _id
      username
      email
      bookCount
    }
  }
`;

export const REMOVEBOOK = gql`
  mutation Mutation($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      bookCount
      savedBooks {
        bookId
        title
        description
        image
        authors
      }
    }
  }
`;
