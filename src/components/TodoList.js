/*jshint esversion: 6 */
import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      <li><TodoListItem label="Drink Coffee" /></li>
      <li><TodoListItem
        label="Learn React"
        important /></li>
    </ul>
  );
}

export default TodoList;
