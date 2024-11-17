import React, { useState } from 'react';
import Menu from './Menu'; // Import the Menu component
import Button from './Button';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

    return (
        <header className=' bg-primary z-50'>
            {/* Logo Section */}
            <section className='md:max-w-[1200px] mx-auto relative w-full h-20 flex justify-between items-center px-10'>
                <div className='w-44 md:w-40'>
                    <img src="/assets/images/logos/navbar-logo.png" width="100%" alt="Logo..." />
                </div>

                {/* Navigation Menu */}
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                {/* Button Section */}
                <div className='hidden md:block'>
                    <Button text="Book Now" style="bg-primary-light text-primary" />
                </div>

                {/* Hamburger Icon */}
                <i
                    className="fa-solid fa-bars text-primary-light text-2xl md:hidden cursor-pointer"
                    onClick={() => setMenuOpen(true)}
                ></i>
            </section>
        </header>
    );
};

export default Header;
