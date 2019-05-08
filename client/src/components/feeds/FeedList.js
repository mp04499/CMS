import React, {useContext} from 'react';
import Feed from "./Feed";
import {FeedContext} from "../contexts/FeedContext";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "../../css/Feed.css";

const FeedList = () => {

  const feeds = useContext(FeedContext);

  return (
    <TransitionGroup>
      {feeds.map(feed =>
        <CSSTransition
          key={feed.id}
          timeout={500}
          classNames="Feed"
        >
          <Feed key={feed.id} name={feed.name} at={feed.at} text={feed.text}/>
        </CSSTransition>
      )}
    </TransitionGroup>

  )
};

export default FeedList;
