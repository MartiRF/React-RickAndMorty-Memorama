import { useContext } from 'react'
import { MemoContex } from '../context/MemoContext'
import { Carta } from './Cartas/Carta'
import './tablero.css'

export const Tablero = () => {

  const {fetch} = useContext(MemoContex)

  return (
    <section className='tablero' >
        {
            fetch.baraja.map((item,index) => (

                <Carta 
                    key={index}
                    cartaMain={item}
                    index={index}
                    />
            ))
        }
    </section>
  )
}
