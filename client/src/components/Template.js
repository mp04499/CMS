import Header from './Header';
import Foot from './Foot';
import {NotificationProvider} from "./contexts/NotificationContext";
import {ArticleProvider} from "./contexts/ArticleContext";
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react';

const Template = props => {
  return (
    <NotificationProvider>
      <Header/>
      <div style={{padding: '100px', marginBottom: "60px"}}>
        <ArticleProvider>
          {props.children}
        </ArticleProvider>
      </div>
      <Foot/>
    </NotificationProvider>
  );
};

export default Template;
