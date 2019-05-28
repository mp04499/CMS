import React, { createContext, useReducer, useEffect } from "react";
import FeedReducer from '../reducers/FeedReducer';
import client from '../../apollo/Apollo';
import { getFeeds } from '../../apollo/Posts';
import gql from "graphql-tag";

const FEED_SUBSCRIPTION = gql`
  subscription FeedSubscription {
    postCreated {
      id
      message
      author {
        id
        username
      }
    }
  }
  `;

export const FeedContext = createContext();
export const DispatchContext = createContext();

export const FeedProvider = props => {

  let defaultFeed = [];

  const [feeds, dispatch] = useReducer(FeedReducer, defaultFeed);

  const subscribeFeed = async () => {
    await client.subscribe({ query: FEED_SUBSCRIPTION }).subscribe({
      next: data => {
        dispatch({ type: 'ADD', post: data.data.postCreated });
      }
    })
  }

  useEffect(() => {
    const setDefault = async () => {
      try {
        const feeds = await getFeeds();
        dispatch({ type: 'SET', feeds });
      } catch (error) {
        console.log(error);
      }
    }
    setDefault();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        await subscribeFeed();
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [])

  return (
    <FeedContext.Provider value={feeds}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </FeedContext.Provider>
  )
};

