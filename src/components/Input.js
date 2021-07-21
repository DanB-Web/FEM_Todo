import { useState } from 'react'
import { ReactComponent as Check} from '../assets/icon-check.svg'
import '../styles/input.scss'

const Input = ({ todos, setTodos }) => {

    const [inputState, setInputState] = useState({ job: '', complete: false})

    const setJobHandler = (e) => {
      const copy = inputState
      const newState = {
        job: e.target.value,
        complete: copy.complete
      }
      setInputState(newState)
    }

    const setCompleteHandler = () => {
      const copy = inputState
      const newState = {
        job: copy.job,
        complete: !copy.complete
      }
      setInputState(newState)
    }

    const keyPressHandler = (e) => {
      if (e.key === 'Enter') {
        const copy = [...todos]
        const newTodo = inputState
        copy.push(newTodo)
        setTodos(copy)
        setInputState({ job: '', complete: false})
      }
    }

    return (
        <div className='input-container'>
          <div className='input-checkbox-div'>
          {inputState.complete ? 
            <Check 
                className='input-checkbox input-checkbox-complete' 
                onClick={setCompleteHandler}/> :
              <div
                className='input-checkbox input-checkbox-incomplete' 
                onClick={setCompleteHandler}
              ></div>}        
          </div>
          <input 
            type='text' 
            value={inputState.job} 
            placeholder='Create a new task...'
            onChange={e => setJobHandler(e)}
            onKeyPress={keyPressHandler}
            />
        </div>
    )
}

export default Input