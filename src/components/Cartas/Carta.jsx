import React from 'react'
import { useContext } from 'react'
import { MemoContex } from '../../context/MemoContext'
import './carta.css'
export const Carta = ({ cartaMain, index,}) => {
  
  const {cartaClick} = useContext(MemoContex)
  const { image, name, flipped } = cartaMain
  
  return (
    <div className={`carta carta-hidden ${flipped && 'carta-flipped'}`} onClick={() => ((!flipped && !cartaClick.animating) && cartaClick.onClick( cartaMain={...cartaMain, index}) )}>
            <div className='carta-front'>

            </div>

            <div className='carta-back'>
              {/* <div className='containerCartaFront'> */}
                <img className='carta-back-img' src={image} alt={name}/>
                <p className='carta-front-text'>{name}</p>
              {/* </div> */}
            </div>
    </div>
  )
}
