import React from 'react'
import './carta.css'
export const Carta = ({ onClick, carta, index, animating }) => {

  const { image, name, flipped } = carta
  
  return (
    <div className='carta' onClick={() => ((!flipped && !animating) && onClick( carta={...carta, index}) )}>
                        {/* carta-flipped  */}
        <div className={`carta-hidden ${flipped && 'carta-flipped'}` } >
            <div className='carta-front'>

            </div>
            <div className='carta-back'>
              <div className='containerCartaFront'>
                <img className='carta-back-img' src={image} alt={name}/>
                <p className='carta-front-text'>{name}</p>
              </div>
            </div>
        </div>
    </div>
  )
}
