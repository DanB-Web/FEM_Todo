import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ListItem from './ListItem'
import '../styles/list.scss'

const List = ({todos, setTodos, renderedList, deleteTodoHandler, toggleCompleteHandler}) => {

    const handleOnDragEnd = (result) => {
      if (!result.destination) return
      const copy = [...todos]
      const [reorderedList] = copy.splice(result.source.index, 1)
      copy.splice(result.destination.index, 0, reorderedList)
      setTodos(copy)
    }

    if (renderedList === 'active') {
      todos = todos.filter(todo => todo.complete === false) 
    }

    if (renderedList === 'completed') {
      todos = todos.filter(todo => todo.complete === true) 
    }

    return (
        <div className='list-container'>    
          {todos.length > 0 ?
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId='todos'>
                {(provided) => (
                  <ul className='todos' {...provided.droppableProps} ref={provided.innerRef}>
                  {todos.map((todo, index) => (
                    <Draggable key={todo.job} draggableId={todo.job} index={index} >
                      {(provided) => (
                        <ListItem   
                          provided={provided}
                          todo={todo} 
                          deleteTodoHandler={deleteTodoHandler}
                          toggleCompleteHandler={toggleCompleteHandler}
                        />
                      )}
                    </Draggable>    
                  ))} 
                  {provided.placeholder}
                </ul>
                )}
              </Droppable>
            </DragDropContext> 
          : <p className='no-todos'>Nothing to do!</p>}  
        </div>
    )
}

export default List