import gql from "graphql-tag";

const GET_USERS = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`

export { GET_USERS }; 
