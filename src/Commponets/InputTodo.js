import React, {useContext, useState } from 'react'
import { Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContex } from './Dataprovider';
export default function InputTodo() {
    const [todos, setTodos] = useContext(DataContex)
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        if (!text) { }
        else {
            setTodos([...todos, { name: text, edit:true}])
            setText('')

        }
        e.preventDefault()
    }

  return (
    <Form className='text-center'  autoComplete='off'>
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label className='fs-1 fw-bold'>TODOLIST</Form.Label>
        <Form.Control type="text" value={text}  onChange={(e)=>setText(e.target.value)}   required placeholder="AddSomeListHere" />
      <Button className='mt-3'type='submit' onClick={handleSubmit}>ADD To List</Button>  
  </Form.Group>
    </Form>
  )
}
