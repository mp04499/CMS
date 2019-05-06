import React, {useState} from 'react';
import Feed from "./Feed";

const FeedList = () => {
  const [feed] = useState(Array(5).fill(0));

  return (
    feed.map(post => <Feed/>)
  )
};

export default FeedList;
