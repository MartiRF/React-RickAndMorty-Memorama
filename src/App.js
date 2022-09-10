
import { Tablero } from './components/Tablero';
import { useFetch } from './hooks/useFetch';
import './app.css'
import { useState } from 'react';

function App() {
  const [puntaje, setPuntaje] = useState(0)
  const { baraja, isLoading, setBarajaPrime } = useFetch()
  

  return (
    <div className="container">
      <h1>Memorama Rick and Morty</h1>
      <h2> Puntaje: {puntaje}</h2>
      <Tablero baraja={baraja} setBarajaPrime={setBarajaPrime} puntaje={(value) => setPuntaje(value)} />
    </div>
  );
}

export default App;
