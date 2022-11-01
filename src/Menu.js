import React from 'react'
import Link from './Link'

const Menu = () => {
  return (
    <ul>
      <Link texto='Home' target='/'/>
      <Link texto='Produtos' target='/produtos'/>
    </ul>
  )
}

export default Menu
