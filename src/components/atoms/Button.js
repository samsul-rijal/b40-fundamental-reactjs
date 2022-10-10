import React from 'react'

function Button({name, ...rest}) {
  return <button {...rest}>{name}</button>
}

export default Button