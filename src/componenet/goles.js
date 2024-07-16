// import React, { useState } from 'react'
// import './goles.css'




// const Goles = ({ goles }) => {

//     let [current, setcurrent] = useState(0)


//     return (
//         <main className='bg-[#F7F9FA]  py-[32px] md:flex  '>
//             <div className="box-one px-[24px]  md:hidden">
//                 <h1 className='font-semibold text-[32px]'>{goles.title}</h1>

//             </div>
            
//             <div className="box-1  overflow-x-scroll  md:overflow-hidden flex w-full md:order-2 items-center">

//                 {goles.foucus.map((e, i) => (

//                     <div className={`total flex-shrink-0 w-full ${i === current ? "md:block" : "md:hidden"}`} key={i}>
//                         <img src={e.img} alt="goloes" srcset="" />

//                         <div className="sub px-[24px] py-[32px] flex flex-col  gap-2  md:hidden">
//                             <div className="title_ font-semibold">
//                                 {e.title}
//                             </div>
//                             <div className="about text-[gray]">
//                                 {e.para}
//                             </div>
//                             <p className='text-[#3B198F] font-semibold text-[14px]'>
//                             {e.btn}

//                             </p>
//                         </div>

//                     </div>

//                 ))}



//             </div>

//             <div className="box-2 w-full md:order-1 hidden md:block">
//                 <div className="section-one flex flex-col gap-4  justify-start order-2 md:order-1 mx-[23px] px-[1px] ">
//                     <h1 className='font-semibold text-[32px] hidden md:block'>{goles.title}</h1>
//                     {goles.foucus.map((e, i) => (
//                         <div key={i} className={`box  ${current === i ? "box-sh" : ""}  flex p-[24px] gap-3 rounded-xl md:min-h-[155px] justify-center items-center mt-3 flex-shrink-0 cursor-pointer `} onClick={() => setcurrent(i)}>
//                             <div className="sec-one  justify-center items-center hidden md:flex">
//                                 <img src={e.logo} className='w-32' alt="" />

//                             </div>
//                             <div className="sec-two flex flex-col gap-2">
//                                 <h2 className='font-semibold '>{e.title}</h2>
//                                 <p className='text-[#6A6F73] text-[14px]'>{e.para}</p>
//                                 <p className='text-[#3B198F] font-semibold text-[14px]'>{e.btn}</p>
//                             </div>

//                         </div>
//                     ))}


//                 </div>

//             </div>




//         </main>
//     )
// }

// export default Goles


// above my with out scroll below with scroll indicator code by chatgpt



import React, { useState, useEffect } from 'react';
import './goles.css';

const Goles = ({ goles }) => {
    const [current, setCurrent] = useState(0);

    const handleScroll = (e) => {
        const box = e.target;
        const width = box.clientWidth;
        const newCurrent = Math.round(box.scrollLeft / width);
        setCurrent(newCurrent);
    };

    const handleIndicatorClick = (index) => {
        const box = document.querySelector(".box-1");
        const width = box.clientWidth;
        box.scrollTo({
            left: width * index,
            behavior: 'smooth'
        });
        setCurrent(index);
    };

    useEffect(() => {
        const box = document.querySelector(".box-1");
        box.addEventListener('scroll', handleScroll);
        return () => {
            box.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className='bg-[#F7F9FA] py-[32px] md:flex relative '>
            <div className="box-one px-[24px] md:absolute  ">
                <h1 className='font-semibold text-[32px] flex-shrink-0'>{goles.title}</h1>
            </div>

            <div className="box-1 overflow-x-scroll md:overflow-hidden flex w-full md:order-2 items-center  ">
                {goles.foucus.map((e, i) => (
                    <div className={`total flex-shrink-0 w-full ${i === current ? "md:block" : "md:hidden"}`} key={i}>
                        <img src={e.img} alt="goles" />
                        <div className="sub px-[24px] py-[32px] flex flex-col gap-2 md:hidden">
                            <div className="title_ font-semibold">
                                {e.title}
                            </div>
                            <div className="about text-gray">
                                {e.para}
                            </div>
                            <p className='text-[#3B198F] font-semibold text-[14px]'>
                                {e.btn}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="box-2 w-full md:order-1 hidden md:block md:mt-[60px]  ">
                <div className="section-one flex flex-col gap-4 justify-start order-2 md:order-1 py-1">
                  
                    {goles.foucus.map((e, i) => (
                        <div key={i} className={`box ${current === i ? "box-sh" : ""} flex p-[24px] mx-[24px]  gap-3 rounded-xl md:min-h-[155px] justify-center items-center mt-3 flex-shrink-0 cursor-pointer`} onClick={() => setCurrent(i)}>
                            <div className="sec-one justify-center items-center hidden md:flex">
                                <img src={e.logo} className='w-32' alt="" />
                            </div>
                            <div className="sec-two flex flex-col gap-2">
                                <h2 className='font-semibold'>{e.title}</h2>
                                <p className='text-[#6A6F73] text-[14px]'>{e.para}</p>
                                <p className='text-[#3B198F] font-semibold text-[14px]'>{e.btn}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="mobile-indicator flex md:hidden justify-center absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 gap-2">
                {goles.foucus.map((_, i) => (
                    <div key={i} className={`dot w-3 h-3 ${current === i ? "bg-black" : "bg-gray-300"} rounded-full`} onClick={() => handleIndicatorClick(i)}></div>
                ))}
            </div>
        </main>
    );
}

export default Goles;

