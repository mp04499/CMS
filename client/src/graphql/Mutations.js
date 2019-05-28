import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: {email: $email, password: $password}) {
      user {
        id
        username
      }
    }
  }
  `;

export const loginMutation = props => {
  return (
    <Mutation
      mutation={LOGIN}
      variables={{ email: props.email, password: props.password }}
    >
      {mutation => (
        props.children
      )}
    </Mutation>
  )
}
