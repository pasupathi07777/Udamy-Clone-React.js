import { search } from '../server/searchIcon.js'
import banner_1 from "../img/banner-1.jpg";
import banner_2 from "../img/banner-2.jpg";

export let banners = {
    banner: [
        {
            title: "Skills that drive you forward",
            about: "Technology and the world of work change fast — with us, you're faster. Get the skills to achieve goals and stay competitive.",
            searchIcon: search,
            image: banner_2,
            btn: []
        },
        {
            title: "Learning that gets you",
            about: "Skills for your present (and your future). Get started with us.",
            searchIcon: search,
            image: banner_1,
            btn: ["Plan for individuals", "Plan for organization"]
        }
    ],
    lerfArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 sm:size-14 cursor-pointer " >
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
    </svg>,
    rightArrow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 sm:size-14 cursor-pointer "  >
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
    </svg>

}