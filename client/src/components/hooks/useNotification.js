import {useState} from "react";


export default function Notifications(initial = []) {

  const [notifications, setNotifications] = useState(initial);

  const addNotifications = () => {
    setNotifications([...notifications, initial])
  };

  const removeNotification = e => {
    let newNotifications = notifications.filter(n =>
      n.id != e.target.id
    );
    console.log(newNotifications);
    setNotifications(newNotifications);
  };

  return [notifications, addNotifications, removeNotification];

}
