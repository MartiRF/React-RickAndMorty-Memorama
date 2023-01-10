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
          <Boton>Nueva Partida</Boton>
          <Boton>Configuracion</Boton>
        </div>
      </div>
    </Modal>
  )
}
