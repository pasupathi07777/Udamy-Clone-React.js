

import React, { useState } from 'react'
import './Learning.css'





const Learning = ({ learning }) => {

  
    let [sum, setsum] = useState(0)

    let leftScroll = () => {
        console.log("click")
        let box = document.querySelector(".main-box")
        let width = document.querySelector(".all-cources").clientWidth
        console.log(width)
        box.scrollLeft -= width 
        setsum(sum - width)

    }
    let rightScroll = () => {
        let box = document.querySelector(".main-box")
        console.log("click")
        let width = document.querySelector(".all-cources").clientWidth
        console.log(width)
        box.scrollLeft += width
        setsum(sum + width)

    }
    return (
        <main className=' py-[32px]'>

            <h1 className='font-semibold  text-[24px] px-[24px] '>{learning.title}</h1>
            <div className="cource__video  p-0  mt-4 relative px-[23px]  ">
                

                {
                    learning.arrow.map((e, i) => {
                        if (i === 0) {
                            return (
                                sum > 10 && (
                                    <div className="leftscroll cursor-pointer absolute z-50 hidden w-12 sm:block" onClick={leftScroll} key={i}>
                                        <img src={e} alt="" srcset="" />
                                    </div>
                                )
                            );
                        } else {
                            return (
                                <div className="rightscroll cursor-pointer absolute z-50 hidden sm:block w-12" onClick={rightScroll} key={i}>
                                    <img  src={e} alt="" />
                                </div>
                            );
                        }
                    })
                }




                <div className="main-box div flex gap-5 w-full px-[1px] py-[1px] overflow-x-scroll relative scroll-smooth ">

                    {learning.webDevelopment.map((e,i) => {
                        return <div key={i} className="all-cources rounded  flex-shrink-0    max-w-[300px] bg-white  ">
                            <div className="thumnile"><img src={e.thumnile} alt="" /></div>
                            <div className='p-4 flex flex-col gap-1'>
                                <div className="title font-semibold"><h2>{e.title.slice(0, 33)}</h2></div>
                                <div className="author text-[14px] text-[#6A6F73]"><p>{e.author}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div className="rating text-[14px] font-semibold">{e.rating} ⭐⭐⭐⭐ </div>
                                    <div className="rating-count text-[12px] text-[#6A6F73] ">
                                        {e.ratingList}
                                    </div>
                                </div>
                                <div className="price font-semibold">₹{e.price}</div>
                                <button type="button" className='bg-[#ECEB98] px-2 py-1 w-fit font-medium'>{e.seller}</button>
                            </div>

                        </div>
                    })}

                </div>


            </div>

        </main>
    )
}

export default Learning



