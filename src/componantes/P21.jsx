import React, { useReducer, useState } from 'react';


const initialState = [];


const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const P21 = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [todoText, setTodoText] = useState('');

  // Handler to add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch({ type: 'ADD_TODO', payload: todoText });
      setTodoText(''); // Clear the input
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>

      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo..."
          className="border-2 text-black border-gray-400 px-3 py-2 rounded-md"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Todo
        </button>
      </form>

      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex text-black justify-between items-center mb-2 p-3 border-2 rounded-md ${
              todo.completed ? 'bg-green-200 line-through' : 'bg-white'
            }`}
          >
            <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default P21;
