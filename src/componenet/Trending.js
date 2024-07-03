import React from 'react'
import './Treanding.css'

const Trending = ({treanding}) => {

  
    return (
        <main className='bg-[#F7F9FA] px-[24px] py-[32px]'>
            <div className="title pb-3 ">
                <h1 className='font-semibold text-[32px]'>{treanding.title}</h1>
            </div>
            <div className="content mt-4 flex flex-col md:flex-row gap-6">
                <div className="content__boxone w-full sm:w-fit">
                    <h1 className='font-semibold text-[24px]'>{treanding.sectionOne.title}</h1>
                    <h3 className='font-semibold text-[#3B198F]'>{treanding.sectionOne.list}</h3>
                    <p className='text-[14px] text-[#6A6F73] mt-1'>{treanding.sectionOne.count}</p>
                    <button type="button" className='btn text-[14px] font-semibold  p-2 w-full mt-3 hidden sm:block'>{treanding.sectionOne.btn}</button>

                </div>
                <div className=" order-3 sm:order-2 sm:hidden">
                <button type="button" className='btn text-[14px] font-semibold  p-2 w-full mt-3'>{treanding.sectionOne.btn}</button>
                </div>
                <div className="content__boxtwo flex flex-col sm:flex-row justify-between  w-full gap-5 ">
                    <div className="content__sectionone flex justify-between w-full gap-5" >

                        <div className="sectionone__box flex  flex-col gap-3">
                            <h1 className='font-semibold text-[20px]'>{treanding.sectionTwo.title}</h1>
                            <div className="flex flex-col gap-1">

                                <h1 className='font-semibold sm:text-[20px] text-[#3B198F]'>{treanding.sectionTwo.courceOne}</h1>
                                <p className='text-[14px] text-[#6A6F73]'>{treanding.sectionTwo.courceoneLearns}</p>
                            </div>
                            <div className="flex flex-col gap-1">

                                <h1 className='font-semibold sm:text-[20px] text-[#3B198F]'>{treanding.sectionTwo.courceTwo}</h1>
                                <p className='text-[14px] text-[#6A6F73]'>{treanding.sectionTwo.courcetwoLearns}</p>
                            </div>
                            <div className="flex flex-col gap-1">

                                <h1 className='font-semibold sm:text-[20px] text-[#3B198F]'>{treanding.sectionTwo.courceThree}</h1>
                                <p className='text-[14px] text-[#6A6F73]'>{treanding.sectionTwo.courcethreeLearns}</p>
                            </div>




                        </div>
                        <div className="sectionone__box flex  flex-col gap-3">
                            <h1 className='font-semibold text-[20px]'>{treanding.sectionThree.title}</h1>
                            <div className="flex flex-col gap-1">
                                <h1 className='font-semibold sm:text-[20px] text-[#3B198F]'>{treanding.sectionThree.courceOne}</h1>
                                <p className='text-[14px] text-[#6A6F73]'>{treanding.sectionThree.courceoneLearns}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className='font-semibold sm:text-[20px] text-[#3B198F]'>{treanding.sectionThree.courceTwo}</h1>
                                <p className='text-[14px] text-[#6A6F73]'>{treanding.sectionThree.courcetwoLearns}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className='font-semibold sm:text-[20px] text-[#3B198F]'>{treanding.sectionThree.courceThree}</h1>
                                <p className='text-[14px] text-[#6A6F73]'>{treanding.sectionThree.courcethreeLearns}</p>
                            </div>



                        </div>

                    </div>
                    <div className="content__sectiontwo flex flex-col gap-3 w-full">
                        <h1 className='font-semibold text-[20px]'>{treanding.sectionFour.title}</h1>
                        <div className="flex flex-col gap-1">
                            <h2 className='font-semibold sm:text-[20px] text-[#3B198F]'>{treanding.sectionFour.courceOne}</h2>
                            <p className='text-[14px] text-[#6A6F73]'>{treanding.sectionFour.courceoneLearns}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className='font-semibold sm:text-[20px] text-[#3B198F]'>{treanding.sectionFour.courceTwo}</h2>
                            <p className='text-[14px] text-[#6A6F73]'>{treanding.sectionFour.courcetwoLearns}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className='font-semibold sm:text-[20px] text-[#3B198F]'>{treanding.sectionFour.courceThree}</h2>
                            <p className='text-[14px] text-[#6A6F73]'>{treanding.sectionFour.courcethreeLearns}</p>
                        </div>



                    </div>

                </div>


            </div>

        </main>
    )
}

export default Trending