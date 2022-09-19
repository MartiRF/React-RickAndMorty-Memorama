
import { Tablero } from './components/Tablero';
import { useFetch } from './hooks/useFetch';
import './App.css'
import './styles.css'
import { useState } from 'react';
import { GitHubIco } from './assets/icos/GitHub';
import { LinkedInIco } from './assets/icos/LinkedIn';

function App() {
  const [puntaje, setPuntaje] = useState(0)
  const { baraja, isLoading, setBarajaPrime } = useFetch()
  

  return (
    <>
      <div className="container">
        <header className='header'>
         <div className='header__buttons'>
           <p className='header__buttons_item'>Reiniciar</p>
           {/* <p className='header__buttons_item'>Sin funcion</p> */}
         </div>
         <h1 className='header__titulo'>Memorama Rick and Morty</h1>
         <h2 className='header__movimientos'> Movimientos: <span>{puntaje}</span></h2>
        </header>
        <Tablero baraja={baraja} setBarajaPrime={setBarajaPrime} puntaje={(value) => setPuntaje(value)} />
      </div>
 
      <footer className='flex-box-column'>
        <p className='footer__by'>Elaborado by: Martin Reyes</p>
        {/* Redes */}
        <div className='center-flex-box'>
          <a href='https://github.com/MartiRF' target="_blank" ><GitHubIco />  GitHub</a>
          <a href='https://www.linkedin.com/in/martin-reyes-95743a248/' target="_blank" ><LinkedInIco />  LinkedIn</a>
        </div>
        <a className='center-flex-box' href='https://github.com/MartiRF/React-RickAndMorty-Memorama'>Ir al repositorio</a>
      </footer>

    </>
  );
}

export default App;
