import React from 'react'
import Anchor from './Anchor'

const Footer = () => {
    return (

        <footer className='w-full bg-primary text-primary-light p-7'>
            <section className='md:max-w-[1200px] mx-auto'>

                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-5 border-b-[1px] border-b-neutral-400 pb-5'>
                    {/* Logo Section */}
                    <div className='w-52 md:w-40'>
                        <img src="/assets/images/logos/navbar-logo.png" width="100%" alt="Logo..." />
                    </div>
                    <div className='flex gap-3 text-2xl'>
                        <i class="fa-brands fa-instagram bg-primary-light p-1 rounded-lg text-[#C13584]"></i>
                        <i class="fa-brands fa-facebook bg-primary-light p-1 rounded-lg text-[#4267B2]"></i>
                        <i class="fa-brands fa-twitter bg-primary-light p-1 rounded-lg text-[#1DA1F2]"></i>
                        <i class="fa-brands fa-linkedin bg-primary-light p-1 rounded-lg text-[#0a66c2]"></i>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:justify-center  gap-5 md:gap-10 border-b-[1px] border-b-neutral-400 pb-12 mt-20'>
                    <div className='max-w-96'>
                        <h1 className='text-xl mb-2 font-semibold'>About Medipocket</h1>
                        <p className='text-neutral-300'>MediPocket is a cross-border care USA platform bridging the gap in speciality care by connecting patients around the world from their homes to the top hospitals and specialists in the USA.</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-xl mb-2 font-semibold'>Useful Links</h1>
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Home" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Second Opinion" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Treatment in USA" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Clinical Trial" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="USA Hospital" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="About Us" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Blogs" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Contact Us" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Medical intake form" />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Legal</h1>
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Privacy Policies" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Terms & Conditions" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="License" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Resources" />
                        <Anchor style="w-36 text-neutral-300 cursor-pointer" text="Downloads" />
                        
                    </div>
                    <div>
                        <img className='rounded-t-lg' src="/assets/images/png/doctor-team.png" alt="Image Loading..." />
                        <caption className='text-sm text-neutral-200 block float-start backdrop-blur-sm bg-primary-dark bg-opacity-40 w-full rounded-b-md pb-1' >Omnicure Team</caption>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-5 mt-10'>
                    <h2 className='text-sm text-neutral-300'>Email Address : mr.anas1003@gmail.com</h2>
                    <p className='text-sm'>&copy; {new Date().getFullYear()} Omnicure USA. All Rights Reserved.</p>
                </div>

            </section>
        </footer>
    )
}

export default Footer