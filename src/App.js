import { useContext, useMemo } from 'react';

import { Header, Footer, Loading, Tablero, WinModal, ConfigMenu } from './components/';
import { MemoContex } from './context/MemoContext';
import './App.css'
import './styles.css'


function App() {
  
  const {stateGame} = useContext(MemoContex)

  return (
    <>
      <div className="container">
        {stateGame.isMenuConfigOpen ? <ConfigMenu/> : null}
        <Header/>
        {
          fetch.isLoading 
          ?  <Loading /> 
          : <Tablero />
        }
      </div>
      <Footer/>
      <WinModal />
    </>
  );
}

export default App;
