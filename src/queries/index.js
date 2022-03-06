import { gql } from "@apollo/client";

export const ME = gql`
  query Query {
    me {
      _id
      username
      email
      bookCount

      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;
