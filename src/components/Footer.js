import '../styles/footer.scss'

const Footer = ({todos, clearCompleteHandler, toggleView}) => {
  return (
    <div className='footer-container'>
      <p>{`${todos.length} items left`}</p>
      <div className='footer-filter-buttons'>
        <p onClick={() => toggleView('all')}>All</p>
        <p onClick={() => toggleView('active')}>Active</p>
        <p onClick={() => toggleView('completed')}>Completed</p>
      </div>
      <p className='footer-clear-button' onClick={() => clearCompleteHandler()}>Clear Completed</p>
    </div>
  )
}

export default Footer