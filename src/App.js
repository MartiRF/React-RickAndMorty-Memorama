
import { Tablero } from './components/Tablero';
import { useFetch } from './hooks/useFetch';
import './App.css'
import './styles.css'
import { useState } from 'react';

function App() {
  const [puntaje, setPuntaje] = useState(0)
  const { baraja, isLoading, setBarajaPrime } = useFetch()
  

  return (
    <>
      <div className="container">
        <header className='header'>
         <div className='header__buttons'>
           <p className='header__buttons_item'>Reiniciar</p>
           <p className='header__buttons_item'>Sin funcion</p>
         </div>
         <h1>Memorama Rick and Morty</h1>
         <h2> Puntaje: {puntaje}</h2>
        </header>
        <Tablero baraja={baraja} setBarajaPrime={setBarajaPrime} puntaje={(value) => setPuntaje(value)} />
      </div>
 
      <footer className='flex-box-column'>
        <p className='footer__by'>Elaborado por: Martin Reyes</p>
        {/* Redes */}
        <div className='center-flex-box'>
          <p>Icono de GitHub</p>
          <p> Icono de Linkden</p>
        </div>
        <p className='footer__by'><a>Ir al repositorio</a></p>
      </footer>

    </>
  );
}

export default App;
