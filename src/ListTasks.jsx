import { useState } from 'react';
function ListTasks() {
  const [tasks, setTasks] = useState([
    { title: 'Убрать квартиру', isDone: true },
    { title: 'Помыть посуду', isDone: false },
  ]);

  const [inputTask, setInputTask] = useState('');

  function addTask(event) {
    if (inputTask === '') return;
    setTasks([...tasks, { title: inputTask, isDone: false }]);
    setInputTask('');
    event.preventDefault();
  }
  function deleteTask(index) {
    const copy = [...tasks];
    copy.splice(index, 1);
    setTasks(copy);
  }
  function setTaskIsDone(checked, index) {
    const copy = [...tasks];
    copy[index].isDone = checked;
    setTasks(copy);
    console.log(tasks);
  }
  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.title}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={(event) => setTaskIsDone(event.target.checked, index)}
            />
            {task.title}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={addTask}>
        <input
          value={inputTask}
          onChange={(event) => setInputTask(event.target.value)}
        />
        <button type="submit" disabled={inputTask === ''}>
          Add task
        </button>
      </form>
    </>
  );
}
export default ListTasks;
