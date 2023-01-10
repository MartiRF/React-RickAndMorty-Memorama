import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import Modal from 'react-modal'
import { MemoContex } from '../../context/MemoContext';
import { Boton } from '../Boton/Boton';
import './WinModal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


export const WinModal = () => {

  const {stateGame, counter} = useContext(MemoContex)

  const onCloseModal = () => {
    stateGame.setGanaste(false)
  }

  return (
    <Modal 
      isOpen={stateGame.ganaste}
      onRequestClose={onCloseModal}
      // style={customStyles}
      // className='win__container'
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
