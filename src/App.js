import { useContext } from 'react';

import { Header, Footer, Loading, Tablero } from './components/';
import { MemoContex } from './context/MemoContext';
import './App.css'
import './styles.css'
 
  
function App() {

  const {fetch} = useContext(MemoContex)

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
    </>
  );
}

export default App;
