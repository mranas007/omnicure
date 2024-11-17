import React, { useState } from 'react';
import Menu from './Menu'; // Import the Menu component
import Button from './Button';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

    return (
        <header className='relative w-full h-20 flex justify-between items-center px-10 bg-primary z-50'>
            {/* Logo Section */}
            <div className='sm:w-28 w-'>
                <img src="/assets/image/logos/navbar-logo.png" alt="Logo..." />
            </div>

            {/* Navigation Menu */}
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {/* Button Section */}
            <div className='hidden md:block'>
                <Button text="Book Now" style="bg-primary-light text-primary"/>
            </div>

            {/* Hamburger Icon */}
            <i
                className="fa-solid fa-bars text-primary-light text-2xl md:hidden cursor-pointer"
                onClick={() => setMenuOpen(true)}
            ></i>
        </header>
    );
};

export default Header;
