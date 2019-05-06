import {NotificationContext} from "../contexts/NotificationContext";
import React, {useContext} from "react";
import '../../css/Me.css';

const Notification = ({id, text}) => {

  const {removeNotification} = useContext(NotificationContext);

  return (
    <div key={id} className="notification" style={{height: "70px"}}>
      <button className="delete" key={id} id={id} onClick={() => removeNotification(id)}/>
      {text}
    </div>
  )
};

export default Notification;
