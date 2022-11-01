import React from 'react'
import ItemProduto from './ItemProduto';
import Titulo from './Titulo'

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

const Produtos = () => {
  return (
    <div>
        <Titulo corTxt={'green'} texto={'Produtos'}/>
        {produtos.map(item => {
            return <ItemProduto titulo={item.nome} ram={item.propriedades[0]} memoria={item.propriedades[1]} />
        })}

    </div>
  )
}

export default Produtos
