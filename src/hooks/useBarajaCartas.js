import React, { useEffect, useMemo, useState } from 'react'

export const useBarajaCartas = (fetchData,size) => {
    const [data, setData] = useState([])
    const [baraja, setBaraja] = useState([])

    useEffect(() => {
        setData(fetchData)
        if(data){
            cantidadDeCartas()
        }
    },[fetchData])

    const cantidadDeCartas = () => {

        const indexInicial = Math.floor(Math.random() * 20 - size)
        
        const cartas = data.slice(indexInicial, indexInicial + size)
        setBaraja(cartas)
      }

  return {
    fetchData,
    size,
    baraja
  }
}
