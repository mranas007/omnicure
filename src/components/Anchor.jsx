import React from 'react'

const Anchor = (props) => {
  return (
    <h2 className={`text-primary-light ${props.style}`}>{props.text}</h2>
  )
}

export default Anchor