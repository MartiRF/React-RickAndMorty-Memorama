import { useCartasClick } from '../hooks/useCartasClick'
import { Carta } from './Cartas/Carta'
import './tablero.css'

export const Tablero = ({ baraja, setBarajaPrime, puntajeIncrement }) => {

  const { onClick, animating  } = useCartasClick(baraja,setBarajaPrime, puntajeIncrement)


  return (
    <section className='tablero' >
        {
            baraja?.map((item,index) => (

                <Carta 
                    key={index}
                    carta={item}
                    onClick={onClick}
                    index={index}
                    animating={animating}
                    />
            ))
        }
    </section>
  )
}
