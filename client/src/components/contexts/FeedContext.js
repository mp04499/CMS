import React, { createContext, useReducer } from "react";
import FeedReducer from '../reducers/FeedReducer';
import uuid from 'uuid/v4';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const defaultFeeds =
  [
    { id: uuid(), name: "Tom Fence", at: "@tomfence", text: "Had a great time at the lake yesterday!" },
    {
      id: uuid(),
      name: "Will Ford",
      at: "@willford",
      text: "The basketball game was amazing, a lot of close calls, but we came out on top!"
    }
  ];


export const FeedContext = createContext();
export const DispatchContext = createContext();

export const FeedProvider = props => {

  const [feeds, dispatch] = useReducer(FeedReducer, defaultFeeds);

  return (
    <FeedContext.Provider value={feeds}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </FeedContext.Provider>
  )
};

