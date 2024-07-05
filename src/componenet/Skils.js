import React, { useState } from 'react'
import './Skils.css'


const Skils = ({ skil }) => {

    let [position, setposition] = useState(null)


    // let visibility=(index)=>{
    //     setposition(index)


    // }

    return (
        <main className='py-[0px]'>
            <div className="titles px-[24px] pt-[32px]  ">
                <h1 className='text-[32px] font-semibold'>{skil.title}</h1>
                <p className='text-[#6A6F8A] '>{skil.sub_title}</p>
            </div>
            <div className="domine    text-black  mx-[24px]  flex flex-col gap-3 sm:flex-row relative     ">
                {
                    skil.courceData.map((e, i) => {
                        let visibility = position === i

                        return <div className="domine_names py-2  flex flex-col gap-3 font-semibold " key={i} onClick={() => setposition(position === i ? null : i)}>
                            <div className={`titles text-[19px] flex  justify-between ${"f"} ` } >{e.title}
                                <div className={`icon ${visibility && "rotate-180"} transition-all duration-500 sm:hidden`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>


                            </div>
                            <div className={`body  flex-col gap-3 ${visibility ? "flex" : "hidden"} transition-all duration-1000 `}>
                                <div className="all-topics  flex gap-5 overflow-x-auto ">
                                    {e.allTopics.map((a, z) => {
                                        return <div className="topic w-fit cource flex-shrink-0 bg-[#E4E8EB] rounded-full text-center cursor-pointer " key={z}>
                                            <div className="topic__name">{a.cource}</div>
                                            <div className="topic__learns">{a.learners}</div>
                                        </div>
                                    })}
                                </div>
                                <div className="videos flex gap-5 overflow-x-auto ">
                                    {e.Videos.map((b, o) => {
                                        return <div className="cources rounded overflow-hidden flex-shrink-0 shadow-none sm:shadow-xl    max-w-[300px] bg-white   " key={o}>
                                            <div className="thumnile"><img src={b.thumnile} alt="" /></div>
                                            <div className='p-4 flex flex-col gap-1'>
                                                <div className="title font-semibold"><h2>{b.title.slice(0, 33)}</h2></div>
                                                <div className="author text-[14px] text-[#6A6F73]"><p>{b.author}</p>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <div className="rating text-[14px] font-semibold">{b.rating} {b.ratingStar} </div>
                                                    <div className="rating-count text-[12px] text-[#6A6F73] ">
                                                        {b.ratingList}
                                                    </div>
                                                </div>
                                                <div className="price font-semibold">₹{b.price}</div>
                                            </div>

                                        </div>
                                    })}

                                </div>
                            </div>



                        </div>

                    })
                }

            </div>

            {/* <div className="all-cource flex  py-[30px] overflow-hidden flex-col bg-[#F7F9FA] hidden  ">
                <div className=" w-full overflow-hidden px-[24px] ">
                    <div className="cource-title w-full flex gap-5 overflow-x-auto overflow-hidden      ">
                        {
                            skil.web_development.map((e, i) => {
                                return <div className="w-fit cource flex-shrink-0 bg-[#E4E8EB] rounded-full text-center cursor-pointer" key={i}>
                                    <div className="cource__name font-semibold">
                                        {e.cource}
                                    </div>
                                    <div className="cource__learners text-[black] text-[14px]">
                                        {e.learners}
                                    </div>

                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="cource__video py-10 overflow-x-auto px-[23px] ">
                    <div className="all-cources flex gap-5 overflow-x-auto px-[1px]  ">
                        {skil.courceVideo.webDevelopment.map((e, i) => {
                            return <div className="cources rounded overflow-hidden flex-shrink-0    max-w-[300px] bg-white  " key={i}>
                                <div className="thumnile"><img src={e.thumnile} alt="" /></div>
                                <div className='p-4 flex flex-col gap-1'>
                                    <div className="title font-semibold"><h2>{e.title.slice(0, 33)}</h2></div>
                                    <div className="author text-[14px] text-[#6A6F73]"><p>{e.author}</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className="rating text-[14px] font-semibold">{e.rating} {e.ratingStar} </div>
                                        <div className="rating-count text-[12px] text-[#6A6F73] ">
                                            {e.ratingList}
                                        </div>
                                    </div>
                                    <div className="price font-semibold">₹{e.price}</div>
                                </div>

                            </div>
                        })}

                    </div>


                </div>
                <div className="next sm:w-fit p-3 font-semibold mx-[24px] text-center">
                    <a href="#"> {skil.btn}</a>
                </div>
            </div> */}


        </main>
    )
}

export default Skils