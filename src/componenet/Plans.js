import React from 'react'
import './Plans.css'
import ticIcon from '../img/plans/success.png'
import singlePeople from '../img/plans/single.png'
import multiPeople from '../img/plans/people.png'

const Plans = () => {
    let plan = {
        title: "Accelerate growth — for you or your organization",
        para: "Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.",
        plans: [

            {
                color: "#A435F0",
                title: "Personal Plan",
                option: "For you",
                icon: singlePeople,
                peopleCount: " Individual",
                planePrice: "Starting at ₹850 per month",
                subAlert: "Billed monthly or annually. Cancel anytime.",
                btn: "Start subscription",
                accessIcon: ticIcon,
                access: ["Access to 11,000+ top courses", "Certification prep", "Goal-focused recommendations,", "AI-powered coding exercises"]

            },
            {
                color: "#5022C3",
                title: "Team Plan",
                option: "For your team",
                icon: multiPeople,
                peopleCount: " 2 to 20 people",
                planePrice: "₹1,167 a month per user",
                subAlert: "Billed annually. Cancel anytime.",
                btn: "Start subscription",
                accessIcon: ticIcon,
                access: ["Access to 11,000+ top courses", "Certification prep", "Goal-focused recommendations,", "AI-powered coding exercises", "Analytics and adoption reports"]

            },
            {
                color: "#5022C3",
                title: "Enterprise Plan",
                option: "For your whole organization",
                icon: multiPeople,
                peopleCount: "More than 20 people",
                planePrice: "Contact sales for pricing",
                subAlert: "dd",
                btn: "Request a demo",
                accessIcon: ticIcon,
                access: ["Access to 11,000+ top courses", "Certification prep", "Goal-focused recommendations,", "AI-powered coding exercises", "Analytics and adoption reports", "Dedicated customer success team", "International course collection featuring 15 languages", "Customizable content", "Hands-on tech training with add-on", "Strategic implementation services with add-on"]

            }
        ]
    }


    return (
        <main className='px-[24px] py-[32px]'>
            <div className="section-one font-semibold text-[32px]">{plan.title}</div>
            <div className="section-two text-[#6A6F73] text-[18px] mt-1"><p>{plan.para}</p></div>
            <div className="section-three flex gap-3 mt-8">
                {plan.plans.map((e) => {
                    return <div className="plan-box rounded-xl w-full" style={{ borderTop: `8px solid ${e.color}` }}>
                        <div className="header px-[24px] py-[16px] bg-[#F7F9FA]">
                            <h2>{e.title}</h2>
                            <small className='text-[12px] text-[#6A6F73]'>{e.option}</small>
                            <div className='flex gap-2 mt-2 text-[#6A6F73]'>
                                <img className='w-5 h-5' src={e.icon} alt="" />
                                <p >{e.peopleCount}</p>

                            </div>

                        </div>
                        <div className="body p-[24px] flex flex-col gap-4">
                            <div>
                                <h2 className='font-semibold'>{e.planePrice}</h2>
                                <small className='text-[12px]'>{e.subAlert}</small>
                            </div>
                            <button className='bg-[#000000] text-white font-medium text-[14px] py-2 flex items-center justify-center ' type="button">{e.btn}</button>
                            <div className="access flex flex-col gap-2 text-[14px]">
                                {e.access.map((a) => {
                                    return <div className=" flex gap-2  items-center"><img className='w-3 h-3' src={e.accessIcon} alt="" />{a}</div>
                                })}
                            </div>

                        </div>

                    </div>

                })}

            </div>

        </main>
    )
}

export default Plans