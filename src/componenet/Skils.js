import React from 'react'
import './Skils.css'


const Skils = ({skil}) => {
   
    return (
        <main className='py-[0px]'>
            <div className="titles px-[24px] pt-[32px]  ">
                <h1 className='text-[32px] font-semibold'>{skil.title}</h1>
                <p className='text-[#6A6F8A] '>{skil.sub_title}</p>
            </div>
            <div className="domine mt-10 flex gap-5 text-[#6A6F8A] font-semibold  overflow-x-auto mx-[24px]   ">
                {
                    skil.domine__name.map((e, i) => {
                        return <div className="domine_name flex-shrink-0 " key={i}>{e}

                        </div>

                    })
                }

            </div>

            <div className="all-cource flex  py-[30px] overflow-hidden flex-col bg-[#F7F9FA]  ">
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
                        {skil.courceVideo.webDevelopment.map((e,i) => {
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
            </div>


        </main>
    )
}

export default Skils