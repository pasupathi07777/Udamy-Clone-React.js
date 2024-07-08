import { search } from '../server/searchIcon.js'
import banner_1 from "../img/banner-1.jpg";
import banner_2 from "../img/banner-2.jpg";
import left from '../img/arrows/left.png'
import right from '../img/arrows/right.png'

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
   
    arrows:[left,right]

}