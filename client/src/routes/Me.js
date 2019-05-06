import React, {useContext} from 'react';
import '../css/Me.css';
import NotificationList from '../components/notifications/NotificationList'
import {ArticleContext} from "../components/contexts/ArticleContext";
import ArticleList from "../components/articles/ArticleList";
import FeedList from "../components/feeds/FeedList";

const Me = () => {

  const {showNews, setShowNews} = useContext(ArticleContext);

  const news = () => {
    setShowNews(!showNews);
  };

  return (
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title">Notifications</p>
          <NotificationList/>
        </div>
        <div className="tile is-child box">
          <p className="title">News <a
            className={!showNews ? "button is-primary is-outlined" : "button is-primary is-outlined is-loading"}
            style={{marginLeft: "100px", marginTop: "5px"}}
            onClick={news}
          >
            Refresh News
          </a></p>
          <ArticleList/>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">My Feed</p>
          <FeedList/>
        </div>
      </div>
    </div>
  )
};

export default Me;
