import { ReactComponent as Sun } from '../assets/icon-sun.svg'
import { ReactComponent as Moon } from '../assets/icon-moon.svg'

import '../styles/header.scss'

const Header = ({ mode, toggleMode }) => {
    return (
        <div className='header-container'>
            <h1>TODO</h1>
            {mode === 'dark' ? 
              <Sun onClick={toggleMode}/> :
              <Moon onClick={toggleMode}/>
            }
        </div>
    )
}

export default Header