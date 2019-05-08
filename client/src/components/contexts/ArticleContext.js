import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const ArticleContext = createContext();

export const ArticleProvider = props => {

  const [showNews, setShowNews] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d5342e381e0748ada294675b8bca5fef')
        .then(response => {
          setArticles(response.data.articles);
          setShowNews(false)
        });
      if (showNews)
        setShowNews(!showNews);

    }

    setTimeout(() => {
      fetchdata();
    }, 3000);
  }, [showNews]);

  return (
    <ArticleContext.Provider value={{showNews, setShowNews, articles, setArticles}}>
      {props.children}
    </ArticleContext.Provider>
  )
};
