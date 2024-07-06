import React, { useState } from 'react'
import './Story.css'
// import imgOne from '../img/stories/story-1.png'




const Story = ({ story, icons }) => {
   
    let [current, setcurrent]=useState(1)
    let leftscroll = () => {
        console.log("click")
        let box = document.querySelector(".main")
        let width = document.querySelector(".main").clientWidth
        console.log(width)
        box.scrollLeft -= width 
        setcurrent(current !== 1?current-1:1)
     

    }
    let rightscroll = () => {
        let box = document.querySelector(".main")
        console.log("click")
        let width = document.querySelector(".main").clientWidth
        console.log(width)
        box.scrollLeft += width
        setcurrent(current !== 4?current+1:4)
        console.log(current)
      

    }

    return (
        < div className='relative h-fit bg-[#F7F9FA] overflow-hidden '>
            <main className='main flex    flex-row  relative gap-4 sm:gap-0 overflow-x-scroll scroll-smooth sm:min-h-[540px] my-[32px] ' >
                {story.map((e, i) => {
                    return <div className="box-1 flex-shrink-0 flex w-full flex-col md:flex-row  px-[24px] gap-3 md:gap-0" key={i}>
                        <div className="swctionOne border-none min-h-[400px]   flex flex-col justify-center sm:justify-start md:justify-center sm:gap-3 sm:pr-[24px] order-2 md:order-1 w-full  " key={i}>
                            <div className="titles flex   ">
                                <img src={e.title} className='' alt="" />

                            </div>
                            <p className='font-semibold text-[24px]'>{e.about}</p>
                            <div className="percentage flex  gap-7">
                                <div className="persentage__sone  border-black border-b-2 py-[10px] t-[32px] w-full">
                                    <h1 className='font-semibold text-[32px]'>{e.percentage.perOne}</h1>
                                    <p>{e.percentage.peroneAbout}</p>

                                </div>
                                <div className="persentage__sone border-black border-b-2 py-[10px] w-full">
                                    <h1 className='font-semibold text-[32px]'>{e.percentage.perTwo}</h1>
                                    <p>{e.percentage.perTwoAbout}</p>
                                </div>

                            </div>
                            <div className="btn mt-2 w-full sm:w-fit text-center bg-black text-white  p-2 font-semibold" >
                                {e.btn}
                            </div>
                        </div>
                        <div className="sectionTwo order-1 md:order-2 flex justify-center items-center w-full ">
                            <img src={e.img} alt="" srcSet="" className='w-full  h-[500px] md:h-full ' />
                        </div>
                    </div>

                })}




            </main>

            <div className="boxdd absolute  w-fit hidden md:flex  md:bottom-8  md:left-5 right-0 bg-transparent z-50 bg-black   ">
                <div className="box__1 flex  justify-center items-center  gap-3 ">
                    <div className="icon  rounded-full border border-black p-3 bg-white" onClick={leftscroll}>
                        {icons[0]}

                    </div>
                    <div className={`dot w-3 bg-gray-500 rounded-full h-3 ${current ===1 ? "big":""}  ` }>

                    </div>
                    <div className={`dot w-3 bg-gray-500 rounded-full h-3 ${current ===2 ? "big":""}  ` }>

                    </div>
                    <div className={`dot w-3 bg-gray-500 rounded-full h-3 ${current ===3 ? "big":""}  ` }>

                    </div>
                    <div className={`dot w-3 bg-gray-500 rounded-full h-3 ${current ===4 ? "big":""}  ` }>

                    </div>
                   

                    <div className="icon rounded-full border border-black p-3 bg-white " onClick={rightscroll}>
                        {icons[1]}

                    </div>

                </div>
            </div>

        </div>
    )
}
export default Story









