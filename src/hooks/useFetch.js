import { useEffect, useState } from 'react'

export const useFetch = () => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [barajaPrime, setBarajaPrime] = useState([])

  const getData = async () => {
    try {
      setIsLoading(true)
      // Rick and Morty API
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${Math.floor(Math.random() * 20)}`)
      const { results } = await resp.json();
      
      //EL results tiene 20, solo neceito 6,
      // TODO: hacer que sea aletorio al selecionar 6 elementos
      const rangoInicial = Math.floor(Math.random() * 14)

      const cartas = await results.slice(rangoInicial,rangoInicial + 6)
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


  useEffect(() => {
    getData();
  },[])

  return {
    baraja:barajaPrime,
    isLoading,
    setBarajaPrime,
    getData,
  }
}
