import React from 'react'
import { useNotify } from '../context/Context';

const Button = (prop) => {

  // notify from context
  const notify = useNotify();

  return (
    <button
      onClick={notify}
      className={` ${prop.style} h-12 min-w-28 text-xs rounded-3xl px-5`}>
      {prop.text}
    </button>
  )
}

export default Button