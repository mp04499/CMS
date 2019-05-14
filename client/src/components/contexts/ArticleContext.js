import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const ArticleContext = createContext();

export const ArticleProvider = props => {

  const [showNews, setShowNews] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      await callBackendAPI();
      setShowNews(false);

      if (showNews)
        setShowNews(!showNews);

    }

    setTimeout(() => {
      fetchdata();
    }, 3000);
  }, [showNews]);

  const callBackendAPI = () => {
    axios.get("http://localhost:9000/articles?country=us")
    .then(response => setArticles(response.data))
  };

  return (
    <ArticleContext.Provider value={{showNews, setShowNews, articles, setArticles}}>
      {props.children}
    </ArticleContext.Provider>
  )
};
