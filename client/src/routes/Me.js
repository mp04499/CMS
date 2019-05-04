import React, {useState, useEffect, useCallback} from 'react';
import '../css/Me.css';
import useNotification from '../components/hooks/useNotification';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import axios from 'axios';

export default function Me() {

  const [notifications, addNotification, removeNotification] = useNotification([
    {
      id: 0,
      text: "First Notification Here"
    },
    {
      id: 1, text: "Second Notification Here"
    }]);

  const [showNews, setShowNews] = useState(false);
  const [articles, setArticles] = useState([]);
  const [feed, setFeed] = useState(Array(5).fill(0));

  useEffect(() => {
    async function fetchdata() {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d5342e381e0748ada294675b8bca5fef')
        .then(response => setArticles(response.data.articles));
      if (showNews)
        news();

    }

    setTimeout(() => {
      fetchdata();
    }, 3000);
  }, [showNews]);

  const news = () => {
    setShowNews(!showNews);
  };

  return (
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title">Notifications</p>
          <TransitionGroup>
            {notifications.map(n =>
              <CSSTransition
                key={n.id}
                timeout={1000}
                classNames="Me"
              >
                <div key={n.id} className="notification" style={{height: "70px"}}>
                  <button className="delete" key={n.id} id={n.id} onClick={removeNotification}/>
                  {n.text}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        <div className="tile is-child box">
          <p className="title">News <a
            className={!showNews ? "button is-primary is-outlined" : "button is-primary is-outlined is-loading"}
            style={{marginLeft: "100px", marginTop: "5px"}}
            onClick={news}
          >
            Refresh News
          </a></p>
          {articles.slice(0, 5).map(article =>
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={article.urlToImage} alt="Image"/>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{article.title}</strong>
                      <br/>
                      <small>Author: {article.author}</small>
                      <br/>
                      {article.description}
                    </p>
                  </div>
                  <a href={article.url}>{article.publishedAt}</a>
                </div>
              </article>
            </div>
          )}
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">My Feed</p>
          {feed.map(post => <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>John Smith</strong>
                      <small>@johnsmith</small>
                      <small>31m</small>
                      <br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
                      egestas. Nullam condimentum luctus turpis.
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item" aria-label="reply">
            <span className="icon is-small">
              <i className="fas fa-reply" aria-hidden="true"></i>
            </span>
                      </a>
                      <a className="level-item" aria-label="retweet">
            <span className="icon is-small">
              <i className="fas fa-retweet" aria-hidden="true"></i>
            </span>
                      </a>
                      <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}
