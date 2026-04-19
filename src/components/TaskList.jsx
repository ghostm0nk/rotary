import Task from './Task';

const TaskList = ({ tasks, onAddTask, onUpdateTask, onDeleteTask }) => {
  return (
    <div className="container mx-auto p-4 mt-4">
      <h2 className="text-lg font-bold mb-2">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
      <button
        onClick={() => onAddTask({ title: '', description: '', completed: false })}
        className="py-2 px-4 bg-green-500 text-white rounded-lg mt-4"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskList;