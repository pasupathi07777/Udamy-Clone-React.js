import React from 'react'
import './Skils.css'
import img1 from '../img/webdevelopment/web-1.png'

const Skils = () => {
    let skil = {
        title: "All the skills you need in one place",
        sub_title: "From critical skills to technical topics, Udemy supports your professional development.",
        domine__name: ["web development", "IT Certification", " Leadership", "Data Science", "Communication", "Buisiness Analytics & Intelligencw"],
        // web development
        web_development: [{ cource: "Web Development", learners: "13.3M+ learners" }, { cource: "JavaScript", learners: "16.6M+ learners" }, { cource: "React JSt", learners: "7M+ learners" }, { cource: "Angular", learners: "4M+ learners" }, { cource: "Java", learners: "15.5M+ learners" }, { cource: "Android Development", learners: "8M+ learners" }, { cource: "iOS Development", learners: "4M+ learners" }, { cource: "CSS", learners: "9M+ learners" }],

        // web development cources 
        courceVideo: {
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


    }
    return (
        <main className='px-[24px] py-[48px]'>
            <div className="title">
                <h1 className='text-[32px] font-semibold'>{skil.title}</h1>
                <p className='text-[#6A6F8A]'>{skil.sub_title}</p>
            </div>
            <div className="domine mt-10 flex gap-5 text-[#6A6F8A] font-semibold  overflow-x-auto  ">
                {
                    skil.domine__name.map((e, i) => {
                        return <div className="domine_name flex-shrink-0 " key={i}>{e}

                        </div>

                    })
                }

            </div>
            <div className="all-cource flex overflow-x-auto py-[30px] overflow-hidden flex-col bg-[#F7F9FA]  ">
                <div className="cource-title w-fit flex gap-5  ">
                    {
                        skil.web_development.map((e, i) => {
                            return <div className="cource flex-shrink-0 bg-[#E4E8EB] rounded-full text-center cursor-pointer" key={i}>
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
                <div className="cource__video py-10 overflow-x-auto p-0">
                    <div className="div flex gap-5  ">
                        {skil.courceVideo.webDevelopment.map((e) => {
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
                <div className="next w-fit p-3 font-semibold">
                    <a href="#"> Show all Web Development cources</a>
                </div>
            </div>


        </main>
    )
}

export default Skils