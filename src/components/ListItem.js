import { ReactComponent as Check } from '../assets/icon-check.svg'
import { ReactComponent as Cross } from '../assets/icon-cross.svg'

import '../styles/listitem.scss'

const ListItem = ({ todo, deleteTodoHandler, toggleCompleteHandler, provided }) => {
  return (
    <li className='todo-li' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      <div className='todo-checkbox-div' onClick={() => toggleCompleteHandler(todo)}>{
          todo.complete ? 
          <Check className='todo-checkbox todo-checkbox-complete'/> :
          <div className='todo-checkbox todo-checkbox-incomplete'/>
        }</div>
      {todo.complete ? <p className='completed-todo'>{todo.job}</p> : <p>{todo.job}</p>}
      <div className='todo-delete-div'>
        <Cross className='todo-delete' onClick={() => deleteTodoHandler(todo)}/>
      </div>
    </li>
  )
}

export default ListItem