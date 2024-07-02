import React from 'react'
import './Achieving.css'
import quot from '../img/achieving/quote.svg'
import peopleOne from "../img/achieving/people-1.jpeg"
import peopleTwo from "../img/achieving/people-2.jpeg"
import peopleThree from "../img/achieving/people-3.png"
import peopleFour from "../img/achieving/people-4.jpeg"

const Achieving = () => {

    let achieving = {
        title: "See what others are achieving through learning",
        datails: [
            // {
            //     about: "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
            //     photo: "",
            //     responce: "37,076 responses collected",
            //     url: "View Web Development Cource >"
            // },
            {
                about: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
                photo: peopleOne,
                name: "Alvin Lim",
                aboutTwo: "Technical Co-Founder, CTO at Dimensional",
                responce: "37,076 responses collected",
                url: "View this ios & Shift cource  >"


            },
            {
                about: "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
                photo: peopleTwo,
                name: "William A. Wachlin",
                aboutTwo: "Partner Account Manager at Amazon Web Services",
                responce: "37,076 responses collected",
                url: "View this AWS cource  >"


            },
            {
                about: "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
                photo: peopleThree,
                name: "Ian Stevens",
                aboutTwo: "Head of Capability Development, North America at Publicis Sapient",
                responce: "37,076 responses collected",
                url: "View this ios & Shift cource  >"


            },
        ]

    }
    return (
        <main className='bg-[#F7F9FA] px-[24px] py-[34px]'>
            <h1 className='font-semibold text-[32px]'>{achieving.title}</h1>
            <div className="section-1  flex gap-5 mt-4 overflow-x-auto ">
                {achieving.datails.map((e, i) => {
                    return <div className="achieve bg-white  p-[24px] rounded-xl w-[310px] flex-shrink-0">
                        <img src={quot} alt="" className='w-5' srcset="" />
                        <p className='text-[13px] h-[80px] mt-5'>{e.about}</p>
                        <div className="gap-2 my-4 flex">
                            <div className="w-fit max-w-[48px] flex justify-center items-center ">
                                <img src={e.photo} alt="" className='  rounded-full ' />
                            </div>
                            <div className="box-1">
                                <p className='text-[12px] text-[#6A6F73]'>{e.name}</p>
                                <p className='text-[12px] text-[#6A6F73]'>{e.aboutTwo}</p>
                            </div>
                        </div>
                        <a href="#" className='text-[blue] text-[14px]'>{e.url}</a>

                    </div>


                })}
            </div>
        </main >


    )
}

export default Achieving 