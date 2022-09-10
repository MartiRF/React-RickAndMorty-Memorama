import { useCartasClick } from '../hooks/useCartasClick'
import { Carta } from './Cartas/Carta'
import './tablero.css'

export const Tablero = ({ baraja, setBarajaPrime, puntaje }) => {
// (  // const [animating, setAnimating] = useState(false)
//   // const [cartaActualSelecionada, setCartaActualSelecionada] = useState(null)

//   // const onClick = ( carta ) => {
//   //   const { index } = carta
//   //   const cartaFlipped = {...carta,flipped:true}
//   //   let barajaCopy = [...baraja]
//   //   barajaCopy[index] = cartaFlipped
//   //   setBarajaPrime(barajaCopy)

//   //   if(cartaActualSelecionada === null){
//   //     setCartaActualSelecionada(carta)
//   //   }

//   //   else if(carta.name === cartaActualSelecionada.name){
//   //     setCartaActualSelecionada(null)
//   //   }

//   //   else{
//   //     setAnimating(true)

//   //     setTimeout(() => {
//   //       const { index } = cartaActualSelecionada
//   //       baraja[ index ] = {...cartaActualSelecionada, flipped:false}

//   //       setBarajaPrime(baraja)
//   //       setCartaActualSelecionada(null)
//   //       setAnimating(false)
//   //     },1000)
//   //   }
//   // }
// )

  const { onClick, animating, counter } = useCartasClick(baraja,setBarajaPrime)

  const clickPuntaje = () => {
    // console.log(counter)
    puntaje(counter)
  }
  return (
    <section className='board' onClick={() => clickPuntaje()}>
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
