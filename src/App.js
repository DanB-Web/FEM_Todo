import { useState } from 'react'

import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'

import './App.scss'

const App = () => {

  const [mode, setMode] = useState('light')

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
  
  return (
    <div className="App">
      <Header mode={mode} toggleMode={toggleMode}/>
      <Input/>
      <List/>
    </div>
  );
}

export default App;
