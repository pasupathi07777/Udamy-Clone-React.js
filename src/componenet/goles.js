import React from 'react'
import './goles.css'
import iconOne from '../img/goles/icon-1.png'
import iconTwo from '../img/goles/icon-2.png'
import iconThree from '../img/goles/icon-3.png'
import iconFour from '../img/goles/icon-4.png'
import imgOne from '../img/goles/img-1.png'



const Goles = () => {

    let goles = {
        title: "Learning focused on your goals",
        foucus: [
            { title: "Hands-on training", para: "Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.", logo: iconOne },
            { title: "Certification prep", para: "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.", logo: iconTwo },
            { title: "Insights and analytics", para: "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.", logo: iconThree },
            { title: "Customizable content", para: "Create tailored learning paths for team and organization goals and even host your own content and resources.", logo: iconFour }]


    }
    return (
        <main className='bg-[#F7F9FA] px-[24px] py-[32px]'>
            <div className="box-one">
                {/* <h1 className='font-semibold text-[32px]'>{goles.title}</h1> */}

            </div>
            <div className="box-two flex">
                <div className="section-one flex flex-col gap-4  justify-start ">
                    <h1 className='font-semibold text-[32px]'>{goles.title}</h1>
                    {goles.foucus.map((e, i) => {
                        return <div className="box flex p-[24px] gap-3 rounded h-[155px] justify-center items-center mt-3 ">
                            <div className="sec-one flex justify-center items-center">
                                <img src={e.logo} className='w-32' alt="" />

                            </div>
                            <div className="sec-two flex flex-col gap-2">
                                <h2 className='font-semibold '>{e.title}</h2>
                                <p className='text-[#6A6F73] text-[14px]'>{e.para}</p>
                            </div>

                        </div>
                    })}


                </div>
                <div className="section-one flex justify-center items-end">
                    <img src={imgOne} className='w-[90%]' alt="" srcset="" />

                </div>

            </div>
        </main>
    )
}

export default Goles