import React from 'react'

import './Trends.css'

const Trends = ({trends}) => {
    
    return (
        <main className='flex flex-col sm:flex-row px-[24px] py-[32px]' >
            <div className="s1 flex flex-col justify-center  sm:max-w-[270px] gap-3 flex-2 order-2 sm:order-1 ">
                <h1 className='font-semibold text-[32px]'>{trends.title}</h1>
                <p className='text-[18px]'>{trends.para}</p>
                <button type="button" className='btn p-3 w-full sm:fit  font-semibold'>{trends.btn}</button>

            </div>
            <div className="s2 flex-0 flex justify-center items-center order-1 sm:order-2">
                <img src={trends.image} alt="" />

            </div>


        </main>

    )
}

export default Trends