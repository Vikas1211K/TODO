import React from 'react'
import './App.css'
import Todo from "./component/todo.js"
import Header from './component/header.js';

function App() {
  return (
    <>
      <Header title="TODOS" searchbar={false} />
      <Todo/>
      
    </>
  );
}

export default App;
