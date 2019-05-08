import Header from './Header';
import Foot from './Foot';
import {NotificationProvider} from "./contexts/NotificationContext";
import {ArticleProvider} from "./contexts/ArticleContext";
import {FeedProvider} from "./contexts/FeedContext";
import React from 'react';

const Template = props => {
  return (
    <NotificationProvider>
      <Header/>
      <div style={{padding: '100px', marginBottom: "60px"}}>
        <ArticleProvider>
          <FeedProvider>
            {props.children}
          </FeedProvider>
        </ArticleProvider>
      </div>
      <Foot/>
    </NotificationProvider>
  );
};

export default Template;
