
import ticIcon from '../img/plans/success.png'
import singlePeople from '../img/plans/single.png'
import multiPeople from '../img/plans/people.png'
import {downArrow} from '../server/downarrow.js'
export  let plan = {
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
            access: ["Access to 11,000+ top courses", "Certification prep", "Goal-focused recommendations,", "AI-powered coding exercises"],
            arrow:downArrow

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
            access: ["Access to 11,000+ top courses", "Certification prep", "Goal-focused recommendations,", "AI-powered coding exercises", "Analytics and adoption reports"],
            arrow:downArrow

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
            access: ["Access to 11,000+ top courses", "Certification prep", "Goal-focused recommendations,", "AI-powered coding exercises", "Analytics and adoption reports", "Dedicated customer success team", "International course collection featuring 15 languages", "Customizable content", "Hands-on tech training with add-on", "Strategic implementation services with add-on"],
            arrow:downArrow

        }
    ]
}