import React from 'react';
import Button from './Button';

const PlansCard = ({ gradiant, heading, time, price_month, features }) => {
    return (
        <div
            className={`inset-0 ${gradiant} from-primary-light/5 to-transparent | 
            p-8 lg:w-[370px] rounded-2xl backdrop-blur-lg relative overflow-hidden`}
        >
            <div className="relative z-10">
                <h1 className="mb-2 font-semibold text-white">{heading}</h1>
                <p className="text-xs text-neutral-400">{time}</p>
                <h1 className="text-3xl font-semibold text-white">{price_month}</h1>
                <ul className="flex flex-col gap-2 text-xs py-5 ml-6 list-disc text-neutral-300">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                <Button text="Get Started" style="bg-primary-light text-primary h-10 min-w-20 px-2" />
            </div>
        </div>
    );
};

export default PlansCard;
