import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import LogoCard from '../components/LogoCard';
import PlansCard from '../components/PlansCard';
import DoctorCard from '../components/DoctorCard';
import Input from '../components/Input';

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

    const [plansDetails, setPlansDetails] = useState([
        {
            gradiant: "bg-gradient-to-br",
            heading: "Global Lite",
            time: "Starting At",
            price_month: "$10/Month",
            features: [
                "Global Health Coverage IN 50L-3Cr",
                "USA Health Advisor",
                "Discounted USA Medication",
                "Visa Assistance",
                "Preventative Genetic Screening",
                "Global Concierge Service",
            ],
        },
        {
            gradiant: "bg-gradient-to-bl",
            heading: "Global Family",
            time: "Starting At",
            price_month: "$45/Month",
            features: [
                "Global Health Coverage IN 50L-3Cr",
                "USA Health Advisor",
                "Discounted USA Medication",
                "Visa Assistance",
                "Preventative Genetic Screening",
                "Global Concierge Service",
            ],
        },
    ]);

    const [TreatmentTypes, setTreatmentTypes] = useState([
        {
            url: "/assets/images/logos/treatment-1.png",
            text: "Oncology"
        },
        {
            url: "/assets/images/logos/treatment-2.png",
            text: "Endocrinology"
        },
        {
            url: "/assets/images/logos/treatment-3.png",
            text: "Infertility"
        },
        {
            url: "/assets/images/logos/treatment-4.png",
            text: "Mental Health"
        },
        {
            url: "/assets/images/logos/treatment-5.png",
            text: "Cardiology"
        },
        {
            url: "/assets/images/logos/treatment-6.png",
            text: "Neurology "
        },
        {
            url: "/assets/images/logos/treatment-7.png",
            text: "Rheumatology"
        },
        {
            url: "/assets/images/logos/treatment-8.png",
            text: "Plastic Surgery "
        },
        {
            url: "/assets/images/logos/treatment-9.png",
            text: "Rare Diseases"
        },
        {
            url: "/assets/images/logos/treatment-10.png",
            text: "Surrogacy"
        }
    ])

    const [doctorsList, setDoctorsList] = useState([
        {
            url: "/assets/images/png/doctor-1.png",
            text: "Dr. Wade Warren"
        },
        {
            url: "/assets/images/png/doctor-2.png",
            text: "Dr. Guy Hawkins"
        },
        {
            url: "/assets/images/png/doctor-3.png",
            text: "Dr. Cameron Williamson"
        },
        {
            url: "/assets/images/png/doctor-4.png",
            text: "Dr. Leslie Alexander"
        },
    ])

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
                    className='w-[73%] md:max-w-screen-md absolute top-[550px] md:top-[500px] left-1/2 transform -translate-x-1/2 rounded-[40px] bg-primary-light bg-opacity-25 p-2.5 md:p-5 z-0'
                    style={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)' }}>

                    <div className='w-24 md:w-36 absolute top-[70px] md:top-[200px] left-[-50px] md:left-[-65px]'>
                        <Button text="World's leading USA hospitals" style="bg-primary-dark text-primary-light text-[0.6rem] sm:text-[10px] md:text-xs" />
                    </div>

                    <img src="/assets/images/png/doctor.png" alt="image Loading..." className="rounded-[30px]" />
                    <img src="/assets/images/png/mask_group.png" alt="image Loading..." className="absolute top-5 right-5 w-16 md:w-40 md:top-10 md:right-10" />

                    <div className='w-24 md:w-36 absolute top-[80px] md:top-[250px] lg:top-[320px] right-[-35px] md:right-[-65px]'>
                        <Button text="52 countries Reached" style="bg-primary-dark text-primary-light text-[0.6rem] sm:text-[10px] md:text-xs" />
                    </div>
                </div>

                <div className='max-w-[1200px] mx-auto flex flex-col justify-center mt-[130px] md:mt-[500px] '>
                    <div className='w-full flex justify-center flex-col md:flex-row gap-10 px-10 md:px-16'>
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
                <div className='w-full flex justify-center items-center mb-10 md:my-28'>
                    <div className='relative w-[80%] md:w-[900px] h-[280px] md:h-[300px] flex flex-col md:flex-row  items-center bg-primary-dark rounded-3xl p-6'>
                        <div className='w-full md:w-[50%] md:pl-6'>
                            <h1 className='text-primary-light text-2xl md:text-4xl mb-5'>Teleconsult Our Patient Advisors</h1>
                            <Button text="Book a Call" style="bg-primary-light text-primary-dark min-w-24 h-10" />
                        </div>
                        <div >
                            <img src="/assets/images/png/consulting.png" className='w-[45%] md:w-[35%] absolute right-8 md:right-16 bottom-0' alt="Image Loading..." />
                            <i class="fa-solid fa-phone | bg-slate-500 bg-opacity-20 text-primary-light text-xl md:text-5xl z-10 absolute right-[47%] md:right-64 bottom-[20%] md:bottom-24 p-2 px-3 md:p-6 backdrop-blur-md rounded-full"></i>
                        </div>
                    </div>
                </div>

                {/* World Best hospitals */}
                <div className='w-full my-16 md:my-36 py-5'>
                    <div className='w-full lg:w-[900px] md:mx-auto p-5 flex gap-12 md:gap-4 flex-col md:flex-row items-center justify-between'>

                        <div className='flex gap-2 justify-center md:justify-start w-full md:w-[40%] '>
                            <div className='flex flex-col gap-2  mt-[20px]'>
                                <LogoCard url="/assets/images/logos/best-hospital4.png" />
                                <LogoCard url="/assets/images/logos/best-hospital5.png" />
                                <LogoCard url="/assets/images/logos/best-hospital6.png" />

                            </div>
                            <div className='flex flex-col gap-2 mt-[-20px]'>
                                <LogoCard url="/assets/images/logos/best-hospital1.png" />
                                <LogoCard url="/assets/images/logos/best-hospital2.png" />
                                <LogoCard url="/assets/images/logos/best-hospital3.png" />
                            </div>
                            <div className='flex flex-col gap-2  mt-[20px]'>
                                <LogoCard url="/assets/images/logos/best-hospital7.png" />
                                <LogoCard url="/assets/images/logos/best-hospital8.png" />
                                <LogoCard url="/assets/images/logos/best-hospital9.png" />
                            </div>
                        </div>

                        <div className='w-[80%] md:w-[40%] text-center md:text-start'>
                            <h1 className='text-primary text-xs md:text-3xl font-semibold font-mono'>World’s Best USA Hospitals & Research Centers</h1>
                        </div>
                    </div>
                </div>


                {/* plans */}
                <div className='w-full flex flex-col justify-center  bg-primary-dark py-20 p-5'>
                    <h1 className='text-xl md:text-3xl font-semibold text-primary-light text-center font-mono'>Global Plans</h1>
                    <p className='text-xs md:text-sm text-neutral-400 text-center my-5 md:my-8 max-w-[450px] mx-auto'>World’s Best USA Healthcare, Now Accessible and Affordable  with MediPocket Global Membership Plan</p>
                    <div className='w-full lg:w-[900px] md:mx-auto flex flex-col md:flex-row gap-6 md:gap-20 justify-center items-center'>
                        {plansDetails.map((val, index) => {
                            return <PlansCard key={index} {...val} />;
                        })}
                    </div>
                </div>

                <div className='w-full lg:w-[900px] md:mx-auto  p-5 py-10 md:py-20'>
                    <h1 className='text-xl md:text-3xl font-semibold text-primary font-mono max-w-[300px] mb-6 ml-[5vw]'>Explore Treatments across specialties</h1>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-3 justify-items-center place-items-center">
                        {TreatmentTypes.map((val, i) => (
                            <LogoCard
                                key={i}
                                url={val.url}
                                text={val.text}
                                imgStyle="w-7 md:w-12 mb-1"
                                style="text-[9px] md:text-xs text-center mt-0 leading-3"
                            />
                        ))}
                    </div>
                </div>
                {/* Worlds Top Doctors */}
                <div className=' flex justify-center items-center flex-col gap-5 md:gap-10 w-full lg:w-[900px] md:mx-auto p-5 py-10 md:py-24'>
                    <h1 className='text-xl md:text-3xl font-semibold text-primary font-mono mb-6 '>World’s Top Doctors</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 lg:gap-6'>
                        {doctorsList.map((val, i) => (
                            <div key={i} className={i % 2 === 0 ? 'lg:mt-[-30px]' : 'lg:mt-[30px]'}>
                                <DoctorCard text={val.text} url={val.url} />
                            </div>
                        ))}

                    </div>
                </div>


                <div className="grid place-items-center md:gap-10 w-full lg:w-[900px] md:mx-auto px-7 py-10 md:py-20">
                    <div className="relative flex flex-col bg-[#EDECE8] rounded-3xl w-full max-w-[800px] overflow-hidden p-4 md:p-5">
                        <h1 className="text-lg md:text-2xl font-semibold text-primary font-mono z-40 text-center md:text-start">
                            Book A Free Consultation
                        </h1>
                        <div className="w-full h-auto md:w-[500px] flex flex-col gap-4 mt-8 z-40">
                            {/* Inputs */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <Input type="text" placeholder="First Name" style="bg-opacity-50 w-full" />
                                <Input type="text" placeholder="Last Name" style="bg-opacity-50 w-full" />
                                <Input type="text" placeholder="Email ID" style="bg-opacity-50 w-full" />
                                <Input type="number" placeholder="Mobile Number" style="bg-opacity-50 w-full" />
                            </div>
                            <div className="w-full grid gap-4">
                                <Input type="text" placeholder="Country" style="bg-opacity-50 w-full" />
                                <textarea
                                    placeholder="Message"
                                    className="w-full row-span-6 resize-none px-4 py-3 text-sm bg-primary-light bg-opacity-50 backdrop-blur-sm border border-stone-500 focus:outline-none rounded-3xl"
                                ></textarea>
                            </div>
                        </div>

                        {/* Adjust the image */}
                        <img
                            src="/assets/images/png/form-image.png"
                            alt="images loading..."
                            className="absolute top-0 right-0 w-[250px] md:w-[400px] lg:w-[500px] hidden md:block"
                        />
                        <Button text="Submit" style="w-full bg-primary-dark text-primary-light mt-6 md:mt-7 md:w-32 py-3 mx-auto md:mx-0 z-40" />
                    </div>
                </div>


            </section>
        </>
    )
}

export default Home