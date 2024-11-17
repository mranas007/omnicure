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
                        <p className='text-neutral-200'>MediPocket is a cross-border care USA platform bridging the gap in speciality care by connecting patients around the world from their homes to the top hospitals and specialists in the USA.</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-xl mb-2 font-semibold'>Useful Links</h1>
                        <Anchor style="w-36 text-neutral-200" text="Home" />
                        <Anchor style="w-36 text-neutral-200" text="Second Opinion" />
                        <Anchor style="w-36 text-neutral-200" text="Treatment in USA" />
                        <Anchor style="w-36 text-neutral-200" text="Clinical Trial" />
                        <Anchor style="w-36 text-neutral-200" text="USA Hospital" />
                        <Anchor style="w-36 text-neutral-200" text="About Us" />
                        <Anchor style="w-36 text-neutral-200" text="Blogs" />
                        <Anchor style="w-36 text-neutral-200" text="Contact Us" />
                        <Anchor style="w-36 text-neutral-200" text="Medical intake form" />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Legal</h1>
                        <Anchor style="w-36 text-neutral-200" text="Privacy Policies" />
                        <Anchor style="w-36 text-neutral-200" text="Terms & Conditions" />
                        <Anchor style="w-36 text-neutral-200" text="License" />
                        <Anchor style="w-36 text-neutral-200" text="Resources" />
                        <Anchor style="w-36 text-neutral-200" text="Downloads" />
                        
                    </div>
                    <div>
                        <img className='rounded-lg' src="/assets/images/png/doctor-team.png" alt="Image Loading..." />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-5 mt-10'>
                    <p className='text-xs md:text-sm'>&copy; 2023 Omnicure USA. All Rights Reserved.</p>
                    <h2 className='text-xs md:text-sm'>Email Address : mr.anas1003@gmail.com</h2>
                </div>


            </section>
        </footer>
    )
}

export default Footer