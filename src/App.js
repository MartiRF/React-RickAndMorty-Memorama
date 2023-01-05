import { useContext, useMemo } from 'react';

import { Header, Footer, Loading, Tablero, WinModal } from './components/';
import { MemoContex } from './context/MemoContext';
import './App.css'
import './styles.css'


function App() {
  
  return (
    <>
      <div className="container">
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
