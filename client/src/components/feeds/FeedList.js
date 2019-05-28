import React, { useContext } from 'react';
import Feed from "./Feed";
import { FeedContext } from "../contexts/FeedContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../css/Feed.css";
import uuid from 'uuid/v4';

const FeedList = () => {

  const feeds = useContext(FeedContext);

  return (
    <TransitionGroup>
      {feeds.map(post =>
        <CSSTransition
          key={uuid()}
          timeout={500}
          classNames="Feed"
        >
          <Feed key={uuid()} name={post.author.username} at={post.author.username} text={post.message} />
        </CSSTransition>)}
    </TransitionGroup>

  )
};

export default FeedList;
