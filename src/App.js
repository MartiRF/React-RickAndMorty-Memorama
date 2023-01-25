import { useContext } from 'react';

import { Header, Footer, Loading, Tablero, WinModal, ConfigMenu } from './components/';
import { MemoContex } from './context/MemoContext';
import './styles.css'


function App() {

  const {stateGame, fetch} = useContext(MemoContex)
  
  return (
    <>
      <div className="container">
        {stateGame.setting.isMenuConfigOpen ? <ConfigMenu/> : null}
        <Header/>
        {
          fetch.isLoading 
          ?  <Loading /> 
          : <Tablero />
        }
      </div>
      {/* <Footer/> */}
      <WinModal />
    </>
  );
}

export default App;
