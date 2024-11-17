import React from 'react'
import Button from './Button'

const Card = (props) => {
    return (
        <div className='relative w-72 h-[288px] flex gap-3 flex-col items-center text-center rounded-3xl bg-[#F9F9F9] p-5 pb-10'>
            <i class={`${props.icon} | text-primary text-[80px]`}></i>
            <h1 className='text-black'>{props.heading}</h1>
            <p className='text-zinc-600'>{props.paragraph}</p>
            <Button text="Get Started" style="absolute bottom-[-22px] bg-primary text-white" />
        </div>
    )
}

export default Card