import React from 'react'
import './Achieving.css'


const Achieving = ({achieving}) => {

    return (
        <main className='bg-[#F7F9FA]  py-[34px]'>
            <h1 className='font-semibold text-[32px] px-[24px]'>{achieving.title}</h1>
            <div className="section-1  flex gap-5  overflow-x-auto mx-[23px] px-[1px] py-[24px]  ">
                {achieving.datails.map((e, i) => {
                    return <div key={i} className="achieve bg-white  p-[24px] rounded-xl w-[310px] flex-shrink-0">
                        <img src={e.quot} alt="" className='w-5' srcSet="" />
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