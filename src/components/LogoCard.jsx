import React from 'react'

const LogoCard = (prop) => {
  return (
    <div className='bg-[#F9F9F9] h-20 w-20 p-4 md:h-36 md:w-36 md:p-7 rounded-3xl flex items-center justify-center'>
        <img src={prop.url} alt="logo loading..." className='w-full'/>
    </div>
  )
}

export default LogoCard