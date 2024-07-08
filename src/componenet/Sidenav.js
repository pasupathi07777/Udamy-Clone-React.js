import React from 'react'
import './Sidenav.css'

const Sidenav = ({ navDetails, nav, setnav, sit, setsit }) => {




    return (
        <div className={`side-nav sm:hidden fixed w-[280px]  h-[100vh] top-0 z-50 bg-black bg-opacity-80 overflow-y-scroll ${nav === 0 ? "left-[-280px] " : "left-0"}  transition-all duration-1000 `}>

            <div className={`close-icon cursor-pointer ${nav === 1 && ""} ${sit === 1 ? "flex" : "hidden"} bg-white text-black w-[60px] h-[60px]  rounded-full fixed text-center   justify-center items-center left-[290px] top-5 text-[26px]  transition-all duration-1000`} onClick={() => { setnav(0); setsit(0) }}>
                <img src={navDetails.exIcon} alt="" srcSet="" className='w-6' />
            </div>
            <div className="w-[280px] bg-white  flex flex-col gap-3 py-[16px] overflow-y-scroll  ">


                <div className=" flex flex-col gap-2 flex-shrink-0 px-[24px] ">
                    {navDetails.userLog.map((e, i) => (
                        <p key={i} className='text-[#5022C3] cursor-pointer'>{e}</p>
                    ))}
                </div>
                <div className="center flex-shrink-0 flex flex-col px-[24px] py-3 ">
                    <div className="tite font-semibold text-[14px] text-[#6A6F73] ">
                        {navDetails.cources.title}
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        {navDetails.cources.cource.map((e, i) => (
                            <div className="flex justify-between items-center" key={i}>
                                <p className='cursor-pointer' >{e}</p><p className='cursor-pointer text-[20px]'>{">"}</p>
                            </div>


                        ))}


                    </div>
                </div>
                <div className="flex-shrink-0 px-[24px] ">
                    <div className="titlea font-semibold text-[14px] text-[#6A6F73]">
                        {navDetails.cources.aboutUdamy.title}
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        {navDetails.cources.aboutUdamy.info.map((e, i) => (
                            <p className='cursor-pointer' key={i}>{e}</p>

                        ))}
                    </div>
                    <div className="btn mt-3 text-center w-fit">
                        <button className='px-4 py-1 text-center cursor-pointer flex  justify-center items-center gap-1'>
                            <img className='w-4' src={navDetails.cources.aboutUdamy.icon} alt='All Langrage' srcSet=''></img> {navDetails.cources.aboutUdamy.btn}</button>
                    </div>
                </div>


            </div>
        </div>




    )
}
export default Sidenav


