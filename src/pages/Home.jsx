import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

const Home = () => {

    const [cardDetails, setCardDetails] = useState([
        {
            icon: "fa-solid fa-comments",
            heading: "Second Opinion",
            paragraph: "When facing a serious, life-changing illness, we understand the critical importance of obtaining expert advices."
        },
        {
            icon: "fa-solid fa-stethoscope",
            heading: "Treatment",
            paragraph: "Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States."
        },
        {
            icon: "fa-solid fa-earth-americas",
            heading: "Global Plans",
            paragraph: "Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States."
        }
    ]);

    return (
        <>
            <section>
                {/* Hero Section */}
                <div className='w-full h-[570px] pt-20 px-10 bg-primary text-center flex flex-col items-center'>
                    <h1 className='text-3xl sm:text-4xl md:text-6xl text-primary-light font-bold font-sans'>World's Best Advanced</h1>
                    <h1 className='text-3xl sm:text-4xl md:text-6xl text-primary-light font-bold font-sans'>Cross-Border Care</h1>
                    <p className='text-primary-light font-mono text-xs py-8'>Find the Best Hospitals and Doctors Across the World</p>

                    <div className='w-full flex flex-col justify-center md:flex-row md:items-center relative gap-3'>
                        <div className='relative rounded-3xl border flex items-center bg-primary-light bg-opacity-20 md:w-96 h-12'>
                            <i className="fa-solid fa-magnifying-glass | absolute left-0 mt-1 ml-4 text-lg text-primary-light"></i>
                            <input
                                type="text"
                                className='w-full h-full px-5 pl-12 text-primary-light bg-transparent 
                            placeholder:font-mono placeholder:text-sm  focus:outline-none '
                                placeholder='Search diseases, hospitals, countries'
                            />
                        </div>

                        <Button text="Explore Premium Core" style="bg-primary-light text-primary" />
                    </div>
                </div>

                {/* Dr Image */}
                <div
                    className='w-[60%] md:w-[75%] md:max-w-screen-md absolute top-[550px] md:top-[500px] left-1/2 transform -translate-x-1/2 rounded-[40px] bg-primary-light bg-opacity-25 p-3 md:p-5 z-0'
                    style={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)' }}>

                    <div className='w-24 md:w-36 absolute top-[70px] md:top-[200px] left-[-50px] md:left-[-65px]'>
                        <Button text="World's leading USA hospitals" style="bg-primary-dark text-primary-light px-3 h-10 min-w-20 md:h-12 md:px-5 md:min-w-28 text-[7px] sm:text-[10px] md:text-xs" />
                    </div>

                    <img src="/assets/images/png/doctor.png" alt="image Loading..." className="rounded-[30px]" />
                    <img src="/assets/images/png/mask_group.png" alt="image Loading..." className="absolute top-5 right-5 w-16 md:w-40 md:top-10 md:right-10" />

                    <div className='w-24 md:w-36 absolute top-[80px] md:top-[250px] lg:top-[320px] right-[-35px] md:right-[-65px]'>
                        <Button text="52 countries Reached" style="bg-primary-dark text-primary-light px-3 h-10 min-w-20 md:h-12 md:px-5 md:min-w-28 text-[7px] sm:text-[10px] md:text-xs" />
                    </div>
                </div>

                <div className='max-w-[1200px] mx-auto flex flex-col justify-center mt-[130px] md:mt-[500px] '>
                    <div className='w-full flex justify-center flex-col md:flex-row gap-10 px-16'>
                        <h1 className='text-primary md:w-[45%] text-xl md:text-3xl font-mono'>Experiance Exeptional Healthcare in the USA with Omnicure USA</h1>
                        <p className='text-zinc-600 md:w-[45%] text-md'>Discover the pinnacle of healthcare services in the United States, where advancements, quality, cutting edge research, expert doctors and a commitment to patient success, combine to provide an unparalleled medical tourism experience. Omnicure USA is your dedicated partner, guiding you towards improved health and wellness. Connect with us today and embark on a journey of exceptional USA healthcare services.</p>
                    </div>

                    <div className=' w-full flex flex-col gap-8 md:gap-2 md:flex-row justify-between items-center py-20 px-24'>

                        {/* Cards */}
                        {cardDetails.map((val) => {
                            return <Card icon={val.icon} heading={val.heading} paragraph={val.paragraph} />
                        })}

                    </div>
                </div>

                {/* book a call to patient advisors */}
                <div className='w-full min-h-[50vh] border flex justify-center items-center mb-10 md:my-28'>
                    <div className='relative w-[80%] md:w-[900px] h-[280px] md:h-[300px] flex flex-col md:flex-row  items-center bg-primary-dark rounded-3xl p-6'>
                        <div className='w-full md:w-[50%] md:pl-6'>
                            <h1 className='text-primary-light text-2xl md:text-4xl mb-5'>Teleconsult Our Patient Advisors</h1>
                            <Button text="Book a Call" style="bg-primary-light text-primary-dark min-w-24 h-10" />
                        </div>
                        <div >
                            <img src="/assets/images/png/consulting.png" className='w-[45%] md:w-[35%] absolute right-16 bottom-0' alt="Image Loading..." />
                            {/* <img src="/assets/images/logos/phone.png" width="25%" className='' alt="Image Loading..."/> */}
                            <i class="fa-solid fa-phone | bg-slate-500 bg-opacity-20 text-primary-light text-xl md:text-5xl z-10 absolute right-[47%] md:right-64 bottom-[20%] md:bottom-24 p-2 px-3 md:p-6 backdrop-blur-md rounded-full"></i>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home