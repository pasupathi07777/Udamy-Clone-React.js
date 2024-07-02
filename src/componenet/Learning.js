import React from 'react'
import img1 from '../img/webdevelopment/web-1.png'

let learning={
    title:"Learners are viewing",
    webDevelopment: [
        {
            title: "The Complete 2024 Web Development BootcampBecome a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DAppsRating: 4.7 out of 5386523 reviews61.5 total hours373 lecturesAll LevelsCurrent price: ₹3,099",
            author: "Dr.Angela Yu Developer and Lead",
            rating: 4.7,
            ratingList: 386523,
            price: "3,099",
            current: true,
            thumnile: img1


        },
        {
            title: "The Complete 2024 Web Development BootcampBecome a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DAppsRating: 4.7 out of 5386523 reviews61.5 total hours373 lecturesAll LevelsCurrent price: ₹3,099",
            author: "Dr.Angela Yu Developer and Lead",
            rating: 4.7,
            ratingList: 386523,
            price: "3,099",
            current: true,
            thumnile: img1


        },
        {
            title: "The Complete 2024 Web Development BootcampBecome a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DAppsRating: 4.7 out of 5386523 reviews61.5 total hours373 lecturesAll LevelsCurrent price: ₹3,099",
            author: "Dr.Angela Yu Developer and Lead",
            rating: 4.7,
            ratingList: 386523,
            price: "3,099",
            current: true,
            thumnile: img1


        },
        {
            title: "The Complete 2024 Web Development BootcampBecome a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DAppsRating: 4.7 out of 5386523 reviews61.5 total hours373 lecturesAll LevelsCurrent price: ₹3,099",
            author: "Dr.Angela Yu Developer and Lead",
            rating: 4.7,
            ratingList: 386523,
            price: "3,099",
            current: true,

            thumnile: img1


        },
        {
            title: "The Complete 2024 Web Development BootcampBecome a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DAppsRating: 4.7 out of 5386523 reviews61.5 total hours373 lecturesAll LevelsCurrent price: ₹3,099",
            author: "Dr.Angela Yu Developer and Lead",
            rating: 4.7,
            ratingList: 386523,
            price: "3,099",
            current: true,

            thumnile: img1


        },
    ]


}

const Learning = () => {
    return (
        <main className='px-[24px] py-[32px]'>
            <h1 className='font-semibold  text-[24px]'>{learning.title}</h1>
             <div className="cource__video py-10 overflow-x-auto p-0">
                    <div className="div flex gap-5 w-fit  ">
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
                                </div>

                            </div>
                        })}

                    </div>


                </div>

        </main>
    )
}

export default Learning