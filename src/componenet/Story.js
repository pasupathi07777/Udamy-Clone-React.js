import React from 'react'
import './Story.css'
import imgOne from '../img/stories/story-1.png'
import title from '../img/stories/title.svg'



const Story = () => {
    let story = {
        // title: ["Booz ", "Allen ", "Hamilton"],
        title: title,
        about: "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
        percentage: {
            perOne: "93%",
            peroneAbout: "retention rate among participating employees",
            perTwo: "65%",
            perTwoAbout: "of learners noted a positive impact on their productivity",
        },
        btn: "Read full story ->"

    }
    return (
        <main className='flex px-[24px] py-[32px] bg-[#F7F9FA] flex-col sm:flex-row  relative gap-4 sm:gap-0'>
            <div className="swctionOne flex flex-col justify-center gap-5 pr-[24px] order-2 sm:order-1  ">
                <div className="titles flex  ">
                    <img src={story.title} alt="" />
                    {/* {story.title.map((e, i) => {
                        return <h1 className='text-[24px] border-black border-r-2 '>{e}</h1>
                    })} */}
                </div>
                <p className='font-semibold text-[24px]'>{story.about}</p>
                <div className="percentage flex  gap-7">
                    <div className="persentage__sone  border-black border-b-2 py-[10px]t-[32px] w-full">
                        <h1 className='font-semibold text-[32px]'>{story.percentage.perOne}</h1>
                        <p>{story.percentage.peroneAbout}</p>

                    </div>
                    <div className="persentage__sone border-black border-b-2 py-[10px] w-full">
                        <h1 className='font-semibold text-[32px]'>{story.percentage.perTwo}</h1>
                        <p>{story.percentage.perTwoAbout}</p>
                    </div>

                </div>
                <div className="btn w-full sm:w-fit text-center bg-black text-white  p-2 font-semibold" >
                    {story.btn}
                </div>
            </div>
            <div className="sectionTwo order-1 sm:order-2 flex justify-center items-center ">
                <img src={imgOne} alt="" srcset="" className='w-full h-full' />
            </div>

        </main>
    )
}
export default Story