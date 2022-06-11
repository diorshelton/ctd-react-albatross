import React from 'react';

const todoList = [
  {id:1, title:'Do Homework'},
  {id:1, title:'Wash Car'},
  {id:3, title:'Complete lesson 1.2 reading'}
];

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todoList.map(task => <li key={task.id}> {task.title}</li>)}
      </ul>
    </div>
  );
}

export default App;