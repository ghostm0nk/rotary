import { useState } from 'react';

const Task = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = async () => {
    const updatedTask = { ...task, title, description };
    await onUpdateTask(updatedTask);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await onDeleteTask(task.id);
  };

  return (
    <li className="bg-white shadow-sm p-4 mb-2 rounded-lg">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleUpdate}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="py-2 px-4 bg-gray-500 text-white rounded-lg ml-2"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p>{task.description}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="py-2 px-4 bg-red-500 text-white rounded-lg ml-2"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default Task;