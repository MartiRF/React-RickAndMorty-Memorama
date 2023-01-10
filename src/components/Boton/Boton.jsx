import React from 'react'
import './boton.css'
export const Boton = ({children,handlerClick}) => {
  return (
    <button type='button' onClick={handlerClick} className='btn__component'>
      <p>{children}</p>
    </button>
  )
}
