import React from 'react'
import Header from '../../componentes/Header/Header'
import Contenido from './Contenido'
import Footer from '../../componentes/Footer/Footer'

export default function Inicio() {
  return (
    <>
        <Header  cr7Logo={"/img/header/logo-dorado-cr7.png"} />
        <Contenido imgMain={"/img/main/principal/img-main.jpg"}/>
        <Footer />
    </>
  )
}
