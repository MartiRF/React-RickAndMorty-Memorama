import React from 'react'
import { useContext } from 'react';
import Modal from 'react-modal'
import { Boton } from '../Boton/Boton';
import { MemoContex } from '../../context/MemoContext';
import './WinModal.css'


Modal.setAppElement('#root');


export const WinModal = () => {

  const {stateGame, counter} = useContext(MemoContex)

  const onCloseModal = () => {
    stateGame.setIsWin(false)
  }
  const onConfig = () => {
    stateGame.setIsWin(false)
    stateGame.setting.setIsMenuConfigOpen(true)
  }
  return (
    <Modal 
      isOpen={stateGame.isWin}
      onRequestClose={onCloseModal}
      className='modal header'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <div className='win__container'>
        <h1 className='header__titulo'>Ganaste</h1>
        <h2 className='header__movimientos'>Puntaje: <span>{counter.counter}</span></h2>
        <div className='btn__container'>
          <Boton handlerClick={stateGame.newGame}>Nueva Partida</Boton>
          <Boton handlerClick={onConfig}>Configuracion</Boton>
        </div>
      </div>
    </Modal>
  )
}
