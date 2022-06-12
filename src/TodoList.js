import React from 'react';
const todoList = [
  {id:1, title:'Do Homework'},
  {id:1, title:'Wash Car'},
  {id:3, title:'Complete lesson 1.2 reading'}
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map(task => <li key={task.id}> {task.title}</li>)}
    </ul>
  );
};
export default TodoList;