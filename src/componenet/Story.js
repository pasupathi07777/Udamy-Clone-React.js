// import React, { useState } from 'react'
// import './Story.css'





// const Story = ({ story, icons }) => {

//     let [current, setcurrent] = useState(1)
//     let leftscroll = () => {
//         console.log("click")
//         let box = document.querySelector(".main")
//         console.log(box)
//         let width = document.querySelector(".main").clientWidth
//         console.log(width)
//         box.scrollLeft -= width
//         setcurrent(current !== 1 ? current - 1 : 1)


//     }
//     let rightscroll = () => {
//         let box = document.querySelector(".main")
//         console.log(box)
//         let width = document.querySelector(".main").clientWidth
//         console.log(width)
//         box.scrollLeft += 100
//         setcurrent(current !== 4 ? current + 1 : 4)
//         console.log(current)


//     }

//     return (
//         < div className=' relative h-fit bg-[#F7F9FA]  '>
//             <main className='main flex w-fit overflow-scroll       gap-4 sm:gap-0  scroll-smooth sm:min-h-[540px] my-[32px] ' >
//                 {story.map((e, i) => (
//                     <div className="box-1 flex-shrink-0 flex w-full flex-col md:flex-row  px-[24px] gap-3 md:gap-0" key={i}>
//                         <div className="swctionOne border-none min-h-[400px]   flex flex-col justify-center sm:justify-start md:justify-center sm:gap-3 sm:pr-[24px] order-2 md:order-1 w-full  " key={i}>
//                             <div className="titles flex   ">
//                                 <img src={e.title} className='' alt="" />

//                             </div>
//                             <p className='font-semibold text-[24px]'>{e.about}</p>
//                             <div className="percentage flex  gap-7">
//                                 <div className="persentage__sone  border-black border-b-2 py-[10px] t-[32px] w-full">
//                                     <h1 className='font-semibold text-[32px]'>{e.percentage.perOne}</h1>
//                                     <p>{e.percentage.peroneAbout}</p>

//                                 </div>
//                                 <div className="persentage__sone border-black border-b-2 py-[10px] w-full">
//                                     <h1 className='font-semibold text-[32px]'>{e.percentage.perTwo}</h1>
//                                     <p>{e.percentage.perTwoAbout}</p>
//                                 </div>

//                             </div>
//                             <div className="btn mt-2 w-full sm:w-fit text-center bg-black text-white  p-2 font-semibold" >
//                                 {e.btn}
//                             </div>
//                         </div>
//                         <div className="sectionTwo order-1 md:order-2 flex justify-center items-center w-full ">
//                             <img src={e.img} alt="" srcSet="" className='w-full  h-[500px] md:h-full ' />
//                         </div>
//                     </div>

//                 ))}




//             </main>

//             <div className="boxdd absolute  w-fit hidden md:flex  md:bottom-8  md:left-5 right-0 bg-transparent z-50 bg-black   ">
//                 <div className="box__1 flex  justify-center items-center  gap-3 ">
//                     <div className="icon  rounded-full border border-black p-3 bg-white" onClick={leftscroll}>
//                         {icons[0]}

//                     </div>
//                     <div className={`dot w-3 bg-gray-500 rounded-full h-3 ${current === 1 ? "big" : ""}  `}>

//                     </div>
//                     <div className={`dot w-3 bg-gray-500 rounded-full h-3 ${current === 2 ? "big" : ""}  `}>

//                     </div>
//                     <div className={`dot w-3 bg-gray-500 rounded-full h-3 ${current === 3 ? "big" : ""}  `}>

//                     </div>
//                     <div className={`dot w-3 bg-gray-500 rounded-full h-3 ${current === 4 ? "big" : ""}  `}>

//                     </div>


//                     <div className="icon rounded-full border border-black p-3 bg-white " onClick={rightscroll}>
//                         {icons[1]}

//                     </div>

//                 </div>
//             </div>

//         </div>
//     )
// }
// export default Story


// above my with out scroll below with scroll indicator code by chatgpt


import React, { useState, useEffect } from 'react';
import './Story.css';

const Story = ({ story, icons }) => {
    const [current, setCurrent] = useState(1);

    const leftScroll = () => {
        console.log("left")
        const box = document.querySelector(".main-1");
        const width = box.clientWidth;
        console.log(box)
        box.scrollLeft -= width;
        setCurrent(current !== 1 ? current - 1 : 1);
    };

    const rightScroll = () => {
        console.log("right")
        const box = document.querySelector(".main-1");
        console.log(box)
        const width = box.clientWidth;
        box.scrollLeft += width;
        setCurrent(current !== 4 ? current + 1 : 4);
    };

    useEffect(() => {
        const box = document.querySelector(".main-1");
        const handleScroll = () => {
            const width = box.clientWidth;
            const newCurrent = Math.round(box.scrollLeft / width) + 1;
            setCurrent(newCurrent);
        };
        box.addEventListener('scroll', handleScroll);
        return () => {
            box.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='relative h-fit bg-[#F7F9FA] overflow-hidden pb-[32px] md:pb-0 '>
            <main className='main-1 flex flex-row relative gap-4 sm:gap-0 overflow-x-scroll scroll-smooth sm:min-h-[540px]  my-[32px]'>
                {story.map((e, i) => (
                    <div className="box-1 flex-shrink-0 flex w-full flex-col md:flex-row px-[24px] gap-4 sm:gap-4 md:gap-0" key={i}>
                        <div className="sectionOne border-none min-h-[370px]    flex flex-col justify-center sm:justify-start md:justify-center sm:gap-3 sm:pr-[24px] order-2 md:order-1 w-full">
                            <div className="titles flex">
                                <img src={e.title} alt="" />
                            </div>
                            <p className='font-semibold text-[24px]'>{e.about}</p>
                            <div className="percentage flex gap-7">
                                <div className="percentage__one border-black  py-[10px] w-full">
                                    <h1 className='font-semibold text-[32px]'>{e.percentage.perOne}</h1>
                                    <p>{e.percentage.peroneAbout}</p>
                                </div>
                                <div className="percentage__two border-black  py-[10px] w-full"> 
                                  
                                    <h1 className='font-semibold text-[32px]'>{e.percentage.perTwo}</h1>
                                    <p>{e.percentage.perTwoAbout}</p>
                                </div>
                            </div>
                            <div className="btn cursor-pointer md:mt-2 w-full md:w-fit text-center mt-auto bg-black text-white p-2 font-semibold">
                                {e.btn}
                            </div>
                        </div>
                        <div className="sectionTwo order-1 md:order-2 flex justify-center items-center w-full">
                            <img src={e.img} alt="" className='w-full h-[400px] md:h-full' />
                        </div>
                    </div>
                ))}
            </main>

            <div className="boxdd absolute w-fit hidden md:flex md:bottom-8 md:left-5 right-0 bg-transparent z-50">
                <div className="box__1 flex justify-center items-center gap-3">
                    <div className="icon rounded-full border border-black p-3 bg-white" onClick={leftScroll}>
                        {icons[0]}
                    </div>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`dot w-3 bg-gray-500 rounded-full h-3 ${current === i ? "big" : ""}`}></div>
                    ))}
                    <div className="icon rounded-full border border-black p-3 bg-white" onClick={rightScroll}>
                        {icons[1]}
                    </div>
                </div>
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="mobile-indicator   sm:my-0 flex md:hidden justify-center absolute bottom-7 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 gap-2">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i}   className={`dot w-3 h-3 ${current === i ? "bg-black" : "bg-gray-300"} rounded-full`}></div>
                ))}
            </div>
        </div>
    );
};

export default Story;









