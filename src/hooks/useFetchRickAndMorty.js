import { useEffect, useState } from 'react'

/* Esto solo debe de devover la response y estado de carga*/ 
export const useFetchRickAndMorty = () => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [barajaPrime, setBarajaPrime] = useState([])
  const [size, setSize] = useState(6)

  const [arrayData, setArrayData] = useState([])

  const getData = async () => {
    // console.log(size)
    try {
      setIsLoading(true)
      // Rick and Morty API
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${Math.floor(Math.random() * 20)}`)
      const { results } = await resp.json();
      
      //EL results tiene 20, solo neceito 6,


      // TODO: hacer que sea aletorio al selecionar 6 elementos
      const indexInicial = Math.floor(Math.random() * (20 - size))

      const rangoInicial = Math.floor(Math.random() * 14)


      const cartas = await results.slice(indexInicial,indexInicial + size)
      const newCartas = cartas.map(item => {
        const { name, id, image } = item;
        return {
          name,
          id,
          image,
          flipped:false,
        }
      })
      const baraja = [...newCartas,...newCartas]
      shuffleArray(baraja)
      setBarajaPrime(baraja)

      // shuffleArray
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }}

      setIsLoading(false)

    } catch (error) {
      console.log(error)
    }
  }
  // funcion para obtener results de la api
    // manejar estado de isLoading 
  const getResRickAndMorty = async(size) => {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${Math.floor(Math.random() * 20)}`)
      const { results } = await res.json();

      const data = await results.map((data) => {
        const { name, id, image } = data;
        return {name,id ,image,flipped:false,}
      })
      setArrayData(data)
    } catch (error) {
      console.log(error)
    }
  }
  // funcion para selecionar cantidad de cartas
  const cantidadDeCartas = (arr = [], cantidad = 6) => {

    const indexInicial = Math.floor(Math.random() * 20 - cantidad)
    
    const cartas = arr.slice(indexInicial, indexInicial + cantidad)
    return cartas
  }
  // funcion para revolver array(shuffleArray)
  
  // funcion para devolver un objeto con las propiedades: image,id,name,flipped:false

  // funcion para tablero tamaño de tablero

    //Facil es de 12 cartas,
    // Normal es de 16 cartas,
    // Dificil es de 20 cartas
    // *opcionaal Modo Dios, es de 40 cuartas

  
  useEffect(() => {
    getData();
    getResRickAndMorty();
  },[])
  useEffect(() => {
    getData(size);
    getResRickAndMorty();
  },[size])


  

  return {
    baraja:barajaPrime,
    isLoading,
    setBarajaPrime,
    getData,
    getResRickAndMorty,
    arrayData,
    setSize,
    size
  }
}
