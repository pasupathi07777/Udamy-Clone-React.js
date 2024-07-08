import React, { useState } from 'react'
import './Achieving.css'


const Achieving = ({ achieving }) => {

    let [visibility,setvisibility]=useState(0)

    const left = () => {
        let box = document.querySelector(".section-1");
        let width = document.querySelector(".section-1").clientWidth;
        box.scrollLeft -= width;
        setvisibility(0)

    };

    const right = () => {
        let box = document.querySelector(".section-1");
        let width = document.querySelector(".section-1").clientWidth;
        box.scrollLeft += width;
        setvisibility(1)

    };

    return (
        <main className='bg-[#F7F9FA]  py-[34px]  '>
            <h1 className='font-semibold relative text-[32px] px-[24px]'>{achieving.title}</h1>
            <div className="relative h-fit ">
                <div className='section-1 scroll-smooth  py-[24px]   flex gap-5  overflow-x-auto mx-[23px] px-[1px]  '>
                    {achieving.datails.map((e, i) => {
                        return <div key={i} className="achieve bg-white  p-[24px] rounded-xl w-[310px] flex-shrink-0">
                            <img src={e.quot} alt="" className='w-5' srcSet="" />
                            <p className='text-[13px] h-[80px] mt-5'>{e.about}</p>
                            <div className="gap-2 my-4 flex">
                                <div className="max-w-[48px] flex justify-center items-center  ">
                                    <img src={e.photo} alt="" className='  rounded-full min-h-[48px]  ' />
                                </div>
                                <div className="box-1 ">
                                    <p className='text-[12px] text-[#6A6F73]'>{e.name}</p>
                                    <p className='text-[12px] text-[#6A6F73]'>{e.aboutTwo}</p>
                                </div>
                            </div>
                            <p className='text-[blue] text-[14px]'>{e.url}</p>

                        </div>


                    })}
                </div>
                {achieving.arr.map((e, i) => (
                    // console.log(e)
                    <div
                        className={`w-10 hidden sm:block ${i === 0 ? "left-3 " : "right-3"} ${i===0 && visibility===0?"sm:hidden":"block"} arr absolute z-50 cursor-pointer`}
                        onClick={() => { i === 0 ? left() : right() }}
                        key={i}
                    >
                        <img src={e} alt="" />
                    </div>
                ))}
            </div>
        </main >


    )
}

export default Achieving 