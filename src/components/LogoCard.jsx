import React from 'react'

const LogoCard = (props) => {
  return (
    <div className='bg-[#F9F9F9] h-20 w-20 p-4 md:h-28 md:w-28 lg:h-36 lg:w-36 md:p-7 rounded-3xl flex flex-col items-center justify-center'>
      {props.url && <img src={props.url} className={`w-full ${props.imgStyle}`} />}
      {props.text && <h1 className={`${props.style} font-mono text-xl`}>{props.text}</h1>}
    </div>
  )
}

export default LogoCard