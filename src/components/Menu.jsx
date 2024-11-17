import React from 'react';
import Button from './Button';

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <nav
            className={`w-full h-screen fixed top-0 ${menuOpen ? 'right-0' : 'right-[-120%]'
                } transition-all duration-500 ease-in-out px-5 pt-28 md:pt-0 text-primary-light bg-primary-dark bg-opacity-80 md:h-full md:bg-transparent flex flex-col gap-5 md:gap-5 md:static md:flex-row md:justify-center items-center`}
        >
            {/* Close Icon */}
            <div className='text-3xl md:hidden w-full h-20 flex items-center justify-between  absolute top-0 left-0 bg-primary px-5'>
                <i
                    className="fa-solid fa-xmark cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                ></i>

                <div className='block md:hidden'>
                    <Button text="Book Now" style="bg-primary-light text-primary" />
                </div>
            </div>
            <h2>Second Opinion</h2>
            <h2>Medical Travel</h2>
            <h2>Clinical Trial</h2>
            <h2>Membership Goal</h2>
            <h2>Testimonial</h2>
            <h2>Login</h2>
        </nav>
    );
};

export default Menu;
