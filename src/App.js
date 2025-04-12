import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([task, ...tasks]);
    setTask('');
  };

  const deleteTask = (del) => {
    const updatedTask = tasks.filter((_, i) => i !== del);
    setTasks(updatedTask);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">📝 Todo App</h1>

      <div className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div style={{ maxHeight: '230px', overflowY: 'auto' }}>
        <ul className="list-group">
          {tasks.map((t, i) => (
            <li
              key={i}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {t}
              <button className="btn btn-sm btn-danger" onClick={() => deleteTask(i)}>
                Delete Task
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

