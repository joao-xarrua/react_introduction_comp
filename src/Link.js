import React from 'react'

const Link = ({ texto, target, ...props }) => {
  return (
    <li><a href={target} {...props}>{texto}</a></li>
  );
}

export default Link
