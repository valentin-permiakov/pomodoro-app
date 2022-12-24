export const initDB = () => {
  const indexedDB = window.indexedDB;

  const request = indexedDB.open('todo', 1);

  request.onerror = function (event: Event) {
    console.error('an error occurred');
    console.error(event);
  };

  request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore('todoList', { keyPath: 'timeStamp' });
    store.createIndex('todo_name', 'todoName');
    store.createIndex('pomodoro_number', 'pomodoroNumber');
    console.log(store);
  };
};
