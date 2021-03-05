import Container from './components/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setData } from './redux/actions';
import  data  from './data';


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
