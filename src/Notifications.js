import { useState } from "react";

const Noti = () => {
  const [notifications, setNotifications] = useState([
    {
      title: "Assignment due tomorrow",
      message: "PH Assignment due in 1 day",
    },
    {
      title: "New message",
      message: "Someone sent you a text",
    },
    {
      title: "idk",
      message: "insert notification here",
    },
  ]);

  return (
    <div className="container notification">
      <h2>Notifications</h2>

      {notifications.map((notification, i) => (
        <div key={i} className="notification-item">
          <div className="notification-content">
            <h3 className="notification-title">{notification.title}</h3>
            <p className="notification-message">{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Noti;
