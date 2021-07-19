import { useState } from 'react'
import '../styles/list.scss'

const Input = () => {

    const [inputState, setInputState] = useState('')

    const keyPressHandler = (e) => {
      if (e.key === 'Enter') {
        console.log(inputState)
      }
    }

    return (
        <div className='list-container'>
              <input 
                type='text' 
                value={inputState} 
                onChange={e => setInputState(e.target.value)}
                onKeyPress={keyPressHandler}
                />
        </div>
    )
}

export default Input