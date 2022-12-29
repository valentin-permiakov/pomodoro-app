import logo from '../assets/img/logo.svg';
type handleStateType = (value: React.SetStateAction<boolean>) => void;

const checkNotificationPromise = () => {
  try {
    Notification.requestPermission().then();
  } catch (e) {
    return false;
  }

  return true;
};

const handlePermission = (permission: string, handleState: handleStateType) => {
  if (permission === 'granted') {
    handleState(true);
  }
};

export const askPermission = (handleState: handleStateType) => {
  if (!('Notification' in window)) {
    alert('This browser does not support notifications.');
    handleState(true);
  } else if (checkNotificationPromise()) {
    Notification.requestPermission().then((permission) => {
      handlePermission(permission, handleState);
    });
  } else {
    Notification.requestPermission((permission) => {
      handlePermission(permission, handleState);
    });
  }
};

export const createNotification = (type: string) => {
  const notification = new Notification('Pomodoro_box!', {
    body: `${type} Finished`,
    image: logo,
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      notification.close();
    }
  });
};
