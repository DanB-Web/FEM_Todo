import { useState } from 'react'
import '../styles/footer.scss'

const Footer = ({todos, clearCompleteHandler, toggleView}) => {

  const [activeView, setActiveView] = useState({
    all: true,
    active: false,
    completed: false
  })

  //RESET VALUE OBJ FOR FOOTER VIEW
  const reset = {
    all: false,
    active: false,
    completed: false
  }

  const toggleHandler = (view) => {
    toggleView(view)
    setActiveView({...reset, [view]:true})
  }
  return (
    <div className='footer-container'>
      <p>{`${todos.length} items left`}</p>
      <div className='footer-filter-buttons'>
        <p className={activeView.all ? 'currentView' : ''} onClick={() => toggleHandler('all')}>All</p>
        <p className={activeView.active ? 'currentView' : ''} onClick={() => toggleHandler('active')}>Active</p>
        <p className={activeView.completed ? 'currentView' : ''} onClick={() => toggleHandler('completed')}>Completed</p>
      </div>
      <p className='footer-clear-button' onClick={() => clearCompleteHandler()}>Clear Completed</p>
    </div>
  )
}

export default Footer