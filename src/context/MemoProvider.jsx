import React from 'react'
import { MemoContex } from './MemoContext'

export const MemoProvider = ({ children }) => {
  return (
    <MemoContex.Provider value={{hola:'hola mundo'}}>
        { children }
    </MemoContex.Provider>
  )
}
