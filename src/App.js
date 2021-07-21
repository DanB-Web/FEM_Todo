import { useState } from 'react'

import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
import Footer from './components/Footer'
import MobileFooter from './components/MobileFooter'

import defaultData from './utils/data'
import './App.scss'

const App = () => {

  const [mode, setMode] = useState('light')

  const [todos, setTodos] = useState(defaultData)
  const [renderedList, setRenderedList] = useState('all')

  const toggleView = (view) => { 
    if (view === 'all') setRenderedList('all')
    if (view === 'active') setRenderedList('active')
    if (view === 'completed') setRenderedList('completed')
  }

  //TOGGLE LIGHT/DARK MODE
  const toggleMode = () => {
    if (mode === 'light') {
      trans();
      setMode('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      trans();
      setMode('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  //TRANSITION ON MODE CHANGE
  const trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
    document.documentElement.classList.remove('transition')}, 500);
  };

  const deleteTodoHandler = (todo) => {
    const { job } = todo
    const copy = [...todos]
    const filtered = copy.filter(todo => todo.job !== job)
    setTodos(filtered)
  }

  const toggleCompleteHandler = (todo) => {
    const { job, complete } = todo
    const copy = [...todos]
    copy.forEach(todo => {
      if (todo.job === job) todo.complete = !complete
    })
    setTodos(copy)
  }

  const clearCompleteHandler = () => {
    const copy = [...todos]
    const remaining = copy.filter(todo => todo.complete === false)
    setTodos(remaining)
  }

  return (
    <div className="App">
      <Header mode={mode} toggleMode={toggleMode}/>
      <Input todos={todos} setTodos={setTodos}/>
      <List 
        todos={todos}
        setTodos={setTodos} 
        renderedList={renderedList}
        deleteTodoHandler={deleteTodoHandler} 
        toggleCompleteHandler={toggleCompleteHandler}/>
      <Footer 
        todos={todos}
        clearCompleteHandler={clearCompleteHandler}
        toggleView={toggleView}/>
      <MobileFooter
        toggleView={toggleView}
      />
      <p className='bottom-text'>Drag list items to reorder</p>
    </div>
  );
}

export default App;
