import imgOne from '../img/stories/story-1.png'
import imgtwo from '../img/stories/story-2.png'
import imgthree from '../img/stories/story-3.png'
import imgfour from '../img/stories/story-4.png'
import titleOne from '../img/stories/title.svg'
import titleTwo from '../img/stories/title-2.svg'
import titleThree from '../img/stories/title-3.svg'
import titleFour from '../img/stories/title-4.svg'

let left = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

let right = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>


export let icons = [left, right]

export let story = [

    {
        title: titleOne,
        about: "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
        percentage: {
            perOne: "93%",
            peroneAbout: "retention rate among participating employees",
            perTwo: "65%",
            perTwoAbout: "of learners noted a positive impact on their productivity",
        },
        btn: "Read full story ->",
        img: imgOne
    },
    {
        title: titleTwo,
        about: "Capital One Accelerates Transformational Learning through Udemy Business",
        percentage: {
            perOne: "93%",
            peroneAbout: "of learners rated Udemy as “very helpful” to their success",
            perTwo: "65%",
            perTwoAbout: "increase in retention for in-demand tech roles",
        },
        btn: "Read full story ->",
        img: imgtwo
    },//increase in employee enrollments for
    {
        title: titleThree,
        about: "Through Skill- Building and Leadership Development",
        percentage: {
        perOne: "4,800+",
        peroneAbout: " professional development courses",
        perTwo: "65%",
        perTwoAbout: "revenue growth supported by a business model backed by learning",
    },
    btn: "Read full story ->",
    img: imgthree
    },
{
    title: titleFour,
        about: "Toyota logo Toyota Tsusho Enhances its L&D Program to Improve Employee Outcomes",
            percentage: {
        perOne: "50%",
            peroneAbout: "training cost reduction per person",
                perTwo: "+7,000",
                    perTwoAbout: "hours of upskilling",
        },
    btn: "Read full story ->",
        img: imgfour
},

]