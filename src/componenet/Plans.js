


import React, { useState } from 'react';
import './Plans.css';

const Plans = ({ plan }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        console.log(index)
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <main className='py-[32px]'>
            <div className="section-one font-semibold text-[32px] px-[24px]">{plan.title}</div>
            <div className="section-two text-[#6A6F73] text-[18px] mt-1 px-[24px]"><p>{plan.para}</p></div>
            <div className="section-three flex flex-col md:flex-row md:gap-3 mt-8 px-[24px] pb-1">
                {plan.plans.map((e, i) => {
                    const isHidden = activeIndex === i;
                    console.log(isHidden+"manipulate")
                    return (
                        <div className="plan-box contain rounded-xl w-full" key={i} style={{ borderTop: `8px solid ${e.color}` }}>
                            <div className="header px-[24px] py-[16px] bg-[#F7F9FA]" onClick={() => handleToggle(i)}>
                                <div className='flex justify-between items-center '>
                                    <h2>{e.title}</h2>
                                    <p className={`arrow md:hidden  ${isHidden && 'rotate-180'}  transition-all duration-500`}>{e.arrow}</p>
                                </div>
                                <small className='text-[12px] text-[#6A6F73]'>{e.option}</small>
                                <div className='flex flex-col sm:flex-row gap-2 mt-2 text-[#6A6F73]'>
                                    <img className='w-5 h-5' src={e.icon} alt="" />
                                    <p>{e.peopleCount}</p>
                                </div>
                            </div>
                            <div className={`body ${!isHidden ? 'hidden' : 'flex'} transition-all duration-1000 p-[24px] flex-col gap-4 md:flex`}>
                                <div>
                                    <h2 className='font-semibold'>{e.planePrice}</h2>
                                    <small className='text-[12px]'>{e.subAlert}</small>
                                </div>
                                <button className='bg-[#000000] text-white font-medium text-[14px] py-2 flex items-center justify-center' type="button">{e.btn}</button>
                                <div className="access grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 text-[14px]">
                                    {e.access.map((a, i) => (
                                        <div key={i} className="flex gap-2 items-center">
                                            <img className='w-3 h-3' src={e.accessIcon} alt="" />
                                            {a}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Plans;
