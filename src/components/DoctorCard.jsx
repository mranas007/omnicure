import React from 'react'
import Button from './Button'

const DoctorCard = (props) => {
    return (
        <div className="w-[200px] overflow-hidden rounded-2xl bg-primary relative">
            <img className="w-full" src={props.url} alt="image loading..." />
            <div className="absolute bottom-3 left-0 right-0 flex justify-center z-50">
                <Button
                    text={props.text}
                    style="bg-primary-light bg-opacity-80 px-4 py-2"
                />
            </div>
        </div>


    )
}

export default DoctorCard