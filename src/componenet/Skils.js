

// //    --------------
import React, { useState } from 'react';
import './Skils.css';

const Skils = ({ skil }) => {
    const [position, setPosition] = useState(null);
    const [current, setCurrent] = useState(0);

    // arrow diaplay
    let [arrowOne,setarrowOne]=useState(0)
    let [arrowTwo,setarrowTwo]=useState(0)
    let [arrowThree,setarrowThree]=useState(0)

    const handleSkillClick = (index) => {
        setPosition(position === index ? null : index);
        setCurrent(index);
    };

    const handleScroll = (index, direction) => {
        const scr = document.querySelectorAll(".cou__one")[index];
        if (scr) {
            const wid = scr.clientWidth;

            if (direction === 'left') {
                scr.scrollLeft -= wid;
                setarrowOne(arrowOne-10)
            } else if (direction === 'right') {
                scr.scrollLeft += wid;
                setarrowOne(arrowOne===10?10:arrowOne+10)
            }


        }
    };
    const handlescrollTwo = (index, direction) => {
        console.log(index)

        const scr = document.querySelectorAll(".shot")[index]
        console.log(scr)
        if (scr) {
            const wid = scr.clientWidth - (scr.clientWidth / 2);

            if (direction === 'left') {
                scr.scrollLeft -= wid;
                setarrowTwo(arrowTwo-10)
                
            } else if (direction === 'right') {
                scr.scrollLeft += wid;
                setarrowTwo(arrowTwo===10?10:arrowTwo+10)
            }


        }
    };
    const handleScrollThree = (direction) => {
        // console.log(index)

        const scr = document.querySelector(".fort")

        if (scr) {
            const wid = scr.clientWidth - (scr.clientWidth / 2);

            if (direction === 'left') {
                scr.scrollLeft -= wid;
                setarrowThree(arrowThree-10)
            } else if (direction === 'right') {
                scr.scrollLeft += wid;
                setarrowThree(arrowThree===10?10:arrowThree+10)
            }


        }
    };



    return (
        <main className="py-[32px] bg-[#F7F9FA]  ">
            <div className="titles px-[24px]  flex flex-col gap-2">
                <h1 className="text-[24px] sm:text-[32px] font-semibold">{skil.title}</h1>
                <p className="text-[#6A6F8A] sm:text-[18px]">{skil.sub_title}</p>
            </div>

            <div className="px-[24px] sm:px-0 overflow-hidden h-fit mt-5 ">
                <div className=" domine sm:border-none  sm:mx-0    text-black   relative ">
                    <div className="fort overflow-y-hidden  flex sm:mx-[24px]   md:overflow-x-scroll  scroll-smooth text-black  flex-col sm:gap-3 sm:flex-row  ">
                        {skil.courceData.map((course, index) => {
                            const isVisible = position === index;

                            return (
                                <div className={` domine_names flex-shrink-0  py-3 sm:py-0 h-fit  flex flex-col gap-3 font-semibold ${isVisible ? '' : ''} relative`} key={index}>

                                    <div className={`titles  text-[19px] sm:text-[16px]  text-[#6A6F73] flex justify-between sm:py-2 ${current === index ? 'sm:border-b-2 sm:border-black text-black' : 'border-none text-[#6A6F73]'}`} onClick={() => { handleSkillClick(index); }}>
                                        {course.title}
                                        <div className={`icon ${isVisible && 'rotate-180'} flex-shrink-0 transition-all duration-500 sm:hidden`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75L4.5 8.25" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className={`body sm:hidden  flex-col gap-3 ${isVisible ? 'flex' : 'hidden'} transition-all duration-1000`}>
                                        <div className="all-topics flex gap-5 overflow-x-auto">
                                            {course.allTopics.map((topic, topicIndex) => (
                                                <div className="topic  w-fit  cource flex-shrink-0 bg-[#E4E8EB] rounded-full text-center cursor-pointer" key={topicIndex}>
                                                    <div className="topic__name font-semibold">{topic.cource}</div>
                                                    <div className="topic__learns font-normal ">{topic.learners}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="videos flex gap-5 overflow-x-auto">
                                            {course.Videos.map((video, videoIndex) => (
                                                <div className="cources rounded overflow-hidden flex-shrink-0 shadow-none sm:shadow-xl max-w-[300px] bg-white" key={videoIndex}>
                                                    <div className="thumnile"><img className='h-[160px] w-full'  src={video.thumnile} alt="" /></div>
                                                    <div className="p-4 flex flex-col gap-1">
                                                        <div className="course-title font-semibold">
                                                            <h2 className="">{video.title.slice(0, 33)}</h2>
                                                        </div>
                                                        <div className="author text-[14px] text-[#6A6F73]">
                                                            <p>{video.author}</p>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <div className="rating text-[14px] font-semibold">{video.rating} {video.ratingStar}</div>
                                                            <div className="rating-count text-[12px] text-[#6A6F73]">{video.ratingList}</div>
                                                        </div>
                                                        <div className="price font-semibold">₹{video.price}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="btn px-2 py-2 w-full  text-center font-semibold cursor-pointer mb-2">
                                            <button type="button">{course.btn}</button>
                                        </div>
                                    </div>
                                   
                                  
                                </div>
                            );
                        })}
                    </div>

                    


                    <div className="arr  arr-1 hidden sm:flex absolute  justify-center items-center left-[-0px] p-1 text-blue-800 rounded-full">

                        <p className={`font-semibold text-[54px] to-blue-400 ${arrowThree>9?"block":"hidden"}` }onClick={() => handleScrollThree('left')}>{"<"}</p>
                    </div>
                    <div className="arr arr-1 absolute hidden sm:flex   justify-center items-center right-0 p-1  rounded-full   text-blue-900">

                        <p className={`font-semibold text-[54px]`} onClick={() => handleScrollThree('right')}>{">"}</p>
                    </div>
                </div>
            </div>

            <div className="footer-box hidden sm:flex mt-5">
                {skil.courceData.map((course, index) => {
                    const isVisible = current === index;

                    return (
                        <div className={`cou ${isVisible ? 'block' : 'hidden'}`} key={index}>
                            <div className="relative mt-2 ">
                                <div className="cou__one flex gap-3 overflow-x-scroll scroll-smooth mx-[24px]" >
                                    {course.allTopics.map((topic, topicIndex) => (
                                        <div className="topic w-fit cource flex-shrink-0 bg-[#E4E8EB] rounded-full text-center cursor-pointer" key={topicIndex}>
                                            <div className="topic__name font-semibold">{topic.cource}</div>
                                            <div className="topic__learns font-normal">{topic.learners}</div>
                                        </div>
                                    ))}
                                </div>
                                {
                                    skil.arrow.map((e, i) => (
                                        // console.log(e)
                                        <div className={`arr  ${i === 0 ? "left-2" : "right-2"} flex justify-center items-center    bg-white text-black rounded-full`} key={i}>

                                            <img src={e} className={`w-10 h-10 ${i===0?arrowOne>1?"block":"hidden":""}  `} onClick={() => handleScroll(index, `${i === 0 ? "left" : "right"}`)} alt="" srcSet="" />
                                        </div>


                                    ))
                                }



                            </div>
                            <div className="con__two  ">
                                <div className="shot scroll-smooth  flex gap-3 overflow-scroll mx-[24px] px-[1px] mt-5 py-2 relative ">
                                    {course.Videos.map((video, videoIndex) => (

                                        <div className={`cources rounded overflow-hidden flex-shrink-0 sha max-w-[300px] bg-white`} key={videoIndex}>
                                            <div className="thumnile"><img className='h-[160px] w-full'  src={video.thumnile}  alt="" /></div>
                                            <div className="p-4 flex flex-col gap-1">
                                                <div className="course-title font-semibold">
                                                    <h2>{video.title.slice(0, 33)}</h2>
                                                </div>
                                                <div className="author text-[14px] text-[#6A6F73]">
                                                    <p>{video.author}</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="rating text-[14px] font-semibold">{video.rating} {video.ratingStar}</div>
                                                    <div className="rating-count text-[12px] text-[#6A6F73]">{video.ratingList}</div>
                                                </div>
                                                <div className="price font-semibold">₹{video.price}</div>
                                            </div>
                                        </div>



                                    ))}
                                </div>

                                {
                                    skil.arrow.map((e, i) => (
                                        // console.log(e)
                                        <div className={`arr  ${i === 0 ? "left-2" : "right-2"} flex justify-center items-center    bg-white text-black rounded-full`} key={i}>

                                            <img src={e} className={`w-10 h-10 ${i===0?arrowTwo>1?"block":"hidden":""} `} onClick={() => handlescrollTwo(index, `${i === 0 ? "left" : "right"}`)} alt="" srcSet="" />
                                        </div>


                                    ))
                                }

                            </div>
                            <div className="btn px-2 py-2 w-fit mx-[24px] mt-5 font-semibold cursor-pointer">
                                <button type="button">{course.btn}</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Skils;















