import React from 'react'
import { ListGroup,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function ListTodo({ todo, id, handleEdit, handleDelete, handleSaveTodo,editButton,setEditButton }) {
    const [editItem, setEditItem] = useState(todo.name)
    
    
    // const saveHandle = (id) => {
    //     handleEdit(id)
    //     console.log('hello')
    //     if (editItem) {
    //         handleSaveTodo(editItem, id)
    //     } else {
    //         setEditItem(todo.name)
    //     }
    // }
    const saveButton = (id) => {
        handleEdit(id)
        if (editItem) {
            handleSaveTodo(editItem, id)
            setEditButton(false)
        } else {
            setEditItem(todo.name)
        }
    }
    const handleCancel = (id) => {
        handleEdit(id)
        if (editItem) {
            setEditItem(todo.name)
            setEditButton(false)
        }
    }

    return (
      
      <ListGroup.Item className='mt-2' >
          {todo.edit ? <span>{todo.name}</span> :
              <input type='text' value={editItem} onChange={e => setEditItem(e.target.value)} />}
          {todo.edit ? <Button className='me-3 float-end' onClick={() =>  handleDelete(id)} >Delete</Button> :
              <Button className='me-3 float-end'onClick={()=>handleCancel(id)} >Cancel</Button>}
          {todo.edit ? <Button className='me-3 float-end hello' onClick={() =>handleEdit(id)} disabled={editButton}>Edit</Button> :
              <Button className='me-3 float-end' onClick={()=>saveButton(id)} >Save</Button>}
      </ListGroup.Item> 
      
  )
}
