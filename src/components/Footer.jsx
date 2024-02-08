import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className='footer__logo'>
            <h1>LFA Distribuciones</h1>
        </div>
        <div className='footer__links'>
            <ul className='footer__links__container'>
            <Link>Inicio</Link>
            <Link>Sobre nosotros</Link>
            <Link>Contacto</Link>
            </ul>
        </div>
        <div className='footer__map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.765648982556!2d-65.22046932456398!3d-26.815589676705113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d96d923673b%3A0xd67fe8680100e0ca!2sLyA%20Distribuciones!5e0!3m2!1ses-419!2sar!4v1707341518207!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </footer>
  )
}
