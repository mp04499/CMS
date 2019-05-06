import {useState} from "react";
import uuid from 'uuid/v4';


export default function Notifications(initial = []) {

  const [notifications, setNotifications] = useState(initial);
  return {
    notifications,

    addNotifications: newNotificationText => {
      setNotifications([...notifications, {id: uuid(), text: newNotificationText}])
    },

    removeNotification: notificationId => {
      const newNotifications = notifications.filter(n =>
        n.id !== notificationId
      );

      setNotifications(newNotifications);
    }
  }
}
