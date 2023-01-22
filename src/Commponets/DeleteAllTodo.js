import React from 'react'

import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DeleteAllTodo({setTodos}) {
    
    const handleDeleteAll = () => {
        setTodos([])
    }
  return (
    <div className='text-center'>
      <Button className='mt-3' onClick={handleDeleteAll}>DELETE ALL TODO</Button>
    </div>
  )
}
