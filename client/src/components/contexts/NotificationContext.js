import React, {createContext} from "react";
import useNotification from '../hooks/useNotification';

export const NotificationContext = createContext();

export const NotificationProvider = props => {

  const notificationInfo = useNotification([
    {
      id: 0,
      text: "First Notification Here"
    },
    {
      id: 1, text: "Second Notification Here"
    }]);

  return (
    <NotificationContext.Provider value={notificationInfo}>
      {props.children}
    </NotificationContext.Provider>
  );

};
