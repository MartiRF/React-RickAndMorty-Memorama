
import { Tablero } from './components/Tablero';
import { useFetch } from './hooks/useFetch';
import './App.css'
import './styles.css'

import { Header } from './components/views/Header';
import { Footer } from './components/views/Footer';
import { useCounter } from './hooks/useCounter';
import { Loading } from './components/Loading/Loading';

function App() {
  const { counter, increment, reset} = useCounter()
  const { baraja, isLoading, setBarajaPrime, getData } = useFetch()
  

  return (
    <>
      <div className="container">
        <Header puntaje={counter} handlerButtonReiniciar={getData} onPuntajeReset={reset} />
        {
        isLoading 
        ?  <Loading /> 
        : <Tablero baraja={baraja} setBarajaPrime={setBarajaPrime} puntajeIncrement={increment} />
        }
      </div>
      <Footer/>
    </>
  );
}

export default App;
