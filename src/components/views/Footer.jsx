import React from 'react'
import { GitHubIco } from '../../assets/icos/GitHub'
import { LinkedInIco } from '../../assets/icos/LinkedIn'


export const Footer = () => {
  return (
    <footer className='flex-box-column'>
        <p className='footer__by'>Elaborado by: Martin Reyes</p>
        {/* Redes */}
        <div className='center-flex-box'>
          <a href='https://github.com/MartiRF' target="_blank" ><GitHubIco />  GitHub</a>
          <a href='https://www.linkedin.com/in/martin-reyes-95743a248/' target="_blank" ><LinkedInIco />  LinkedIn</a>
        </div>
        <a className='center-flex-box' href='https://github.com/MartiRF/React-RickAndMorty-Memorama'>Ir al repositorio</a>
    </footer>
  )
}
