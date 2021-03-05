import Container from './components/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setData } from './redux/actions';
import  data  from './data';

//A penas se renderiza la app dispachamos la acción setData() pasándole como parámetro la data de productos
function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(setData(data))
  },[])

  return (
    <div>
      <Container/>
    </div>
  );
}

export default App;
