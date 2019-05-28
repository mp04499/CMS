import client from './Apollo';
import gql from "graphql-tag";

const GET_POSTS = gql`
  query Posts {
    posts {
      message
      author {
        username
      }
    }
  }
  `;

export const getFeeds = async () => {
  let list = await client.query({ query: GET_POSTS });
  return list.data.posts;
}