import { gql } from "@apollo/client";

export const ROCKETS_LIST = gql`
  query GetRockets {
    rockets(limit: 10) {
      id
      name
      type
      description
      country
      company
    }
  }
`;
