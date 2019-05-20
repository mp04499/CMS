import React, { useContext } from 'react';
import Feed from "./Feed";
import { FeedContext } from "../contexts/FeedContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../css/Feed.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import uuid from 'uuid/v4';

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

const FeedList = () => {

  const feeds = useContext(FeedContext);

  return (
    <TransitionGroup>
      <Query
        query={GET_POSTS}
        pollInterval={500}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return null;
          if (error) return `Error! ${error}`;

          return (
            data.posts.map(post =>
              <CSSTransition
                key={uuid()}
                timeout={500}
                classNames="Feed"
              >
                <Feed key={uuid()} name={post.author.username} at={post.author.username} text={post.message} />
              </CSSTransition>)
          )
        }}
      </Query>
    </TransitionGroup>

  )
};

export default FeedList;
