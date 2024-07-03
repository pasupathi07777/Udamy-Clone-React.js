import React from 'react'




const Learning = ({ learning }) => {
    return (
        <main className=' py-[32px]'>
            <h1 className='font-semibold  text-[24px] px-[24px]'>{learning.title}</h1>
            <div className="cource__video overflow-x-auto p-0 mx-[23px] mt-4 ">
                <div className="div flex gap-5 w-fit px-[1px] py-[1px]   ">
                    {learning.webDevelopment.map((e) => {
                        return <div className="cources rounded overflow-hidden flex-shrink-0    max-w-[300px] bg-white  ">
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