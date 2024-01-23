import React, { useState, useEffect } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import Toast from 'react-bootstrap/Toast';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';

const MAX_NOTIFICATIONS = 4; // Adjust as needed

const Notification = ({ onNotificationCountChange }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const generateRandomNotification = () => {
      const notificationTypes = ['Server Overload', 'Downtime', 'Security Threat'];
      const randomType = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];

      return {
        id: Date.now(),
        type: randomType,
        message: `${randomType} Notification: ${Math.floor(Math.random() * 100)}%`,
        timestamp: Date.now(),
      };
    };

    const addNotification = () => {
      const newNotification = generateRandomNotification();

      // Maintain a queue with a fixed size (MAX_NOTIFICATIONS)
      setNotifications((prevNotifications) => [...prevNotifications.slice(-MAX_NOTIFICATIONS + 1), newNotification]);
      onNotificationCountChange((prevCount) => prevCount + 1);
    };

    const notificationInterval = setInterval(addNotification, 10000);

    return () => clearInterval(notificationInterval);
  }, [onNotificationCountChange]);

  const handleDismiss = (id) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
    onNotificationCountChange((prevCount) => prevCount - 1);
  };

  const getVariant = (type) => {
    switch (type) {
      case 'Server Overload':
        return 'danger';
      case 'Downtime':
        return 'warning';
      case 'Security Threat':
        return 'info';
      default:
        return 'dark';
    }
  };

  return (
    <div className="notification-system">
      <div className="alert-card" onClick={() => setNotifications([])}>
      </div>

      <div className="notifications-container bottom-left">
        {notifications.map((notification) => (
          <Toast
            key={notification.id}
            onClose={() => handleDismiss(notification.id)}
            delay={3000}
            // autohide
            // animation
            className={`bg-${getVariant(notification.type)} bottom-left-toast`}
            style={{ maxWidth: '300px', width: 'auto', height: 'auto' }}
          >
            <Toast.Header closeButton={true}>
              <strong className="mr-auto">{notification.type}</strong>
              <small className="ml-auto">{moment(notification.timestamp).fromNow()}</small>
            </Toast.Header>
            <Toast.Body>{notification.message}</Toast.Body>
          </Toast>
        ))}
      </div>
    </div>
  );
};

export default Notification;