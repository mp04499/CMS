import React, {useContext} from 'react';
import {ArticleContext} from "../contexts/ArticleContext";
import Article from "./Article"

const ArticleList = () => {

    const {articles} = useContext(ArticleContext);

    return (
      articles.slice(0, 5).map(article =>
        <div>
          <Article
            image={article.urlToImage}
            url={article.url}
            title={article.title}
            author={article.author}
            description={article.description}
            publishedAt={article.publishedAt}
          />
        </div>)
    )
  }
;

export default ArticleList;
