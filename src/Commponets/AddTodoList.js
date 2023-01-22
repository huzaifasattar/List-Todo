import React, {useContext,useState } from 'react'
import { ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTodo from './ListTodo';
import { DataContex } from './Dataprovider';
import DeleteAllTodo from './DeleteAllTodo';

export default function AddTodoList() {
    const [todos, setTodos] = useContext(DataContex)
    const [editButton, setEditButton] = useState(null)

    const handleEdit = id => {
        const newItem = [...todos]
        newItem.forEach((todo, index) => {
            if (id === index) {
                todo.edit = !todo.edit
                setEditButton(true)
            }
        })
       setTodos(newItem)
    }
    const handleDelete = (ind) => {
        const itemDelete = todos.filter((elem, id) => id !== ind)
        setTodos(itemDelete)

    }
    const handleSaveTodo = (editItem,id) => {
        const newItem = [...todos]
        newItem.forEach((todo, index) => {
            if (id === index) {
                todo.name= editItem
            }
        })
       
     setTodos(newItem)
        
    }
    return (
    <>        
            <ListGroup>
                {
                    todos.map((todo, index) => (
                        <ListTodo todo={todo} key={index} id={index}
                            handleEdit={handleEdit} handleDelete={handleDelete} handleSaveTodo={handleSaveTodo}
                            editButton={editButton} setEditButton={setEditButton} />   
                    ))
                }    
            </ListGroup> 
            <DeleteAllTodo setTodos={setTodos} />
    </>
    )
}
