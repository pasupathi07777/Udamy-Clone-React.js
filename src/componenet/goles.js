import React from 'react'
import './goles.css'




const Goles = ({ goles }) => {


    return (
        <main className='bg-[#F7F9FA]  py-[32px]'>
            <div className="box-one px-[24px] ">
                <h1 className='font-semibold text-[32px]'>{goles.title}</h1>

            </div>
            <div className="box-two flex flex-col md:flex-row gap-4 md:gap-0  ">
                <div className="section-one flex flex-col gap-4  justify-start order-2 md:order-1 mx-[23px] px-[1px] ">
                    <h1 className='font-semibold text-[32px] hidden md:block'>{goles.title}</h1>
                    {goles.foucus.map((e, i) => {
                        return <div key={i} className="box  flex p-[24px] gap-3 rounded md:min-h-[155px] justify-center items-center mt-3 flex-shrink-0 ">
                            <div className="sec-one  justify-center items-center hidden md:flex">
                                <img src={e.logo} className='w-32' alt="" />

                            </div>
                            <div className="sec-two flex flex-col gap-2">
                                <h2 className='font-semibold '>{e.title}</h2>
                                <p className='text-[#6A6F73] text-[14px]'>{e.para}</p>
                            </div>

                        </div>
                    })}


                </div>
                <div className="section-one flex justify-center items-end order-1 md:order-2">
                    <img src={goles.img} className='w-[90%]' alt="" srcSet="" />

                </div>

            </div>
        </main>
    )
}

export default Goles