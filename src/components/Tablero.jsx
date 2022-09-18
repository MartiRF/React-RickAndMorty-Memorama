import { useCartasClick } from '../hooks/useCartasClick'
import { Carta } from './Cartas/Carta'
import './tablero.css'

export const Tablero = ({ baraja, setBarajaPrime, puntaje }) => {

  const { onClick, animating, counter } = useCartasClick(baraja,setBarajaPrime)

  const clickPuntaje = () => {
    // console.log(counter)
    puntaje(counter)
  }
  return (
    <section className='tablero' onClick={() => clickPuntaje()}>
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
