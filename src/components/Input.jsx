import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                className={`${props.style} px-5 py-3 bg-primary-light backdrop-blur-sm border border-stone-500 focus:outline-none rounded-full`} />
        </div>
    )
}

export default Input