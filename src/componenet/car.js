import React, { useState } from 'react';
import './Skils.css';

const Skils = ({ skil }) => {
    const [position, setPosition] = useState(null);
    const [current, setCurrent] = useState(0);
    const [arrowStates, setArrowStates] = useState([]);

    // Initialize arrowStates based on the number of course data
    if (arrowStates.length === 0 && skil.courceData.length > 0) {
        const initialArrows = skil.courceData.map(() => ({
            leftVisible: false,
            rightVisible: false,
        }));
        setArrowStates(initialArrows);
    }

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
            } else if (direction === 'right') {
                scr.scrollLeft += wid;
            }

            updateArrows(index, scr);
        }
    };

    const updateArrows = (index, scr) => {
        const newArrowStates = [...arrowStates];
        newArrowStates[index] = {
            leftVisible: scr.scrollLeft > 0,
            rightVisible: scr.scrollLeft < (scr.scrollWidth - scr.clientWidth),
        };
        setArrowStates(newArrowStates);
    };

    return (
        <main className="py-[0px]">
            <div className="titles px-[24px] pt-[32px] flex flex-col gap-2">
                <h1 className="text-[24px] sm:text-[32px] font-semibold">{skil.title}</h1>
                <p className="text-[#6A6F8A]">{skil.sub_title}</p>
            </div>

            <div className="domine sm:overflow-x-scroll text-black mx-[24px] flex flex-col sm:gap-3 sm:flex-row relative mt-5">
                {skil.courceData.map((course, index) => {
                    const isVisible = position === index;

                    return (
                        <div className={`domine_names flex-shrink-0 py-3 sm:py-0 flex flex-col gap-3 font-semibold ${isVisible ? 'bg-blue-600' : ''}`} key={index}>

                            <div className={`titles text-[19px] flex justify-between sm:py-2 ${current === index ? 'sm:border-b-2 sm:border-black' : 'border-none'}`} onClick={() => { handleSkillClick(index); }}>
                                {course.title}
                                <div className={`icon ${isVisible && 'rotate-180'} flex-shrink-0 transition-all duration-500 sm:hidden`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75L4.5 8.25" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`body sm:hidden flex-col gap-3 ${isVisible ? 'flex' : 'hidden'} transition-all duration-1000`}>
                                <div className="all-topics flex gap-5 overflow-x-auto">
                                    {course.allTopics.map((topic, topicIndex) => (
                                        <div className="topic w-fit font-normal cource flex-shrink-0 bg-[#E4E8EB] rounded-full text-center cursor-pointer" key={topicIndex}>
                                            <div className="topic__name">{topic.cource}</div>
                                            <div className="topic__learns">{topic.learners}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="videos flex gap-5 overflow-x-auto">
                                    {course.Videos.map((video, videoIndex) => (
                                        <div className="cources rounded overflow-hidden flex-shrink-0 shadow-none sm:shadow-xl max-w-[300px] bg-white" key={videoIndex}>
                                            <div className="thumnile"><img src={video.thumnile} alt="" /></div>
                                            <div className="p-4 flex flex-col gap-1">
                                                <div className="title font-semibold">
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
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="footer-box hidden sm:flex mt-5">
                {skil.courceData.map((course, index) => {
                    const isVisible = current === index;

                    return (
                        <div className={`cou ${isVisible ? 'block' : 'hidden'}`} key={index}>
                            <div className="relative mx-[24px]">
                                <div className="cou__one flex gap-3 overflow-x-scroll scroll-smooth">
                                    {course.allTopics.map((topic, topicIndex) => (
                                        <div className="topic w-fit cource flex-shrink-0 bg-[#E4E8EB] rounded-full text-center cursor-pointer" key={topicIndex}>
                                            <div className="topic__name">{topic.cource}</div>
                                            <div className="topic__learns">{topic.learners}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="arr absolute flex justify-center items-center left-0 p-1 bg-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${arrowStates[index]?.leftVisible ? 'text-black' : 'text-gray-300'}`} onClick={() => handleScroll(index, 'left')}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </div>
                                <div className="arr absolute flex justify-center items-center right-0 p-1 bg-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${arrowStates[index]?.rightVisible ? 'text-black' : 'text-gray-300'}`} onClick={() => handleScroll(index, 'right')}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            <div className="con__two flex gap-3 overflow-scroll mx-[24px] px-[1px] mt-5 py-2">
                                {course.Videos.map((video, videoIndex) => (
                                    <div className={`cources rounded overflow-hidden flex-shrink-0 sha max-w-[300px] bg-white`} key={videoIndex}>
                                        <div className="thumnile"><img src={video.thumnile} alt="" /></div>
                                        <div className="p-4 flex flex-col gap-1">
                                            <div className="title font-semibold">
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
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Skils;
