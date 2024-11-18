import React from 'react'

const Button = (prop) => {
  return (
    <button className={` ${prop.style} h-12 min-w-28 text-xs rounded-3xl px-5`}>{prop.text}</button>
  )
}

export default Button