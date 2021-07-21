import '../styles/mobilefooter.scss'

const MobileFooter = ({ toggleView}) => {
  return (
    <div className='mobile-footer-container'>
      <div className='mobile-footer-buttons'>
        <p onClick={() => toggleView('all')}>All</p>
        <p onClick={() => toggleView('active')}>Active</p>
        <p onClick={() => toggleView('completed')}>Completed</p>
      </div>
    </div>
  )
}

export default MobileFooter