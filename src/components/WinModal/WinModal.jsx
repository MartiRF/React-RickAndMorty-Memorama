import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import Modal from 'react-modal'
import { MemoContex } from '../../context/MemoContext';
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
  const {stateGame} = useContext(MemoContex)
  // const [isOpen, setIsOpen] = useState()
  const onCloseModal = () => {
    // setIsOpen(false)
    stateGame.setGanaste(false)
  }

  return (
    <Modal 
      isOpen={stateGame.ganaste}
      onRequestClose={onCloseModal}
      style={customStyles}
    
      // className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1>Ganaste Bro</h1>
      <button>Nueva partida</button>
      <button>Configuracion</button>
    </Modal>
  )
}
