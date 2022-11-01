import React from 'react'

const ItemProduto = ({ titulo, ram, memoria, ...props }) => {
  return (
    <div style={{border: '1px solid black', marginTop: '10px', padding: '10px'}}>
      <p>{titulo}</p>
      <ul>
        <li>{ram}</li>
        <li>{memoria}</li>
      </ul>
    </div>
  )
}

export default ItemProduto
