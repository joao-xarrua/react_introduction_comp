import React from 'react'

const Titulo = ({ corTxt, texto, ...props}) => {
  return (
    <h2 style={{color: corTxt}} {...props}>{texto}</h2>
  )
}

export default Titulo
