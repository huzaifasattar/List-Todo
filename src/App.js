import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputTodo from './Commponets/InputTodo';
import AddTodoList from './Commponets/AddTodoList';
import { Dataprovider } from './Commponets/Dataprovider';

function App() {
  return (
  <Dataprovider>
    <Container>
      <InputTodo />
      <AddTodoList />
    </Container>
  </Dataprovider>
  );
}

export default App;
