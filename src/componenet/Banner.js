


// import React, { useState } from "react";
// import "./Banner.css";

// const Banner = ({ banners }) => {

//     // scroll locate
//     let [dot, setdot] = useState(0)

//     const scrollTimeout = React.useRef(null);

//     const handleScroll = () => {
//         if (scrollTimeout.current) {
//             clearTimeout(scrollTimeout.current);
//         }

//         scrollTimeout.current = setTimeout(() => {
//             let box = document.querySelector(".banner");
//             let width = document.querySelector(".banner-img").clientWidth;
//             let scrollLeft = box.scrollLeft;
//             let scrollDiff = scrollLeft % width;

//             if (scrollDiff !== 0) {
//                 if (scrollDiff > width / 2) {
//                     box.scrollLeft = scrollLeft + (width - scrollDiff);
//                 } else {
//                     box.scrollLeft = scrollLeft - scrollDiff;
//                 }
//             }
//         }, 100);
//     };

//     let left = () => {
//         let box = document.querySelector(".banner");
//         let width = document.querySelector(".banner-img").clientWidth;
//         box.scrollLeft -= width;
//         setdot(0)
//     };

//     let right = () => {
//         let box = document.querySelector(".banner");
//         let width = document.querySelector(".banner-img").clientWidth;
//         box.scrollLeft += width;
//         setdot(1)
//     };

//     return (
//         <main className="w-full h-fit flex relative">

//             {banners.arrows.map((e, i) => (
//                 <div className={`w-10 hidden sm:block ${i === 0 ? "left-3 " : "right-3"} sm:top-[155px] md:top-[180px] absolute z-50  hiddenn cursor-pointer`} onClick={() => { i === 0 ? left() : right() }} key={i}>
//                     <img src={e} alt="" />
//                 </div>
//             ))}
//             <div className="droup top-[240px] sm:top-[340px] md:top-[390px]   z-50 w-10 flex gap-1">
//                 {banners.arrows.map((_, i) => (


//                     <div className={`dot ${i == 0 && dot ===0 && "bg-slate-400"} bg-white  ${i == 1 &&  dot ===1 && "bg-slate-400"}   w-3 h-3 rounded-full}`} key={i}></div>
//                 ))}
//             </div>

//             <div className="banner flex w-fit h-full overflow-x-scroll scroll-smooth" onScroll={handleScroll}>
//                 {banners.banner.map((item, index) => (
//                     <div className="img-box flex-shrink-0 relative w-full min-h-[250px] h-[20%]" key={index}>
//                         <img src={item.image} alt="Banner" className="banner-img w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover" />
//                         <div className="banner-box sm:bg-white w-full h-fit sm:w-[340px] p-[24px] sm:shadow-xl z-50 sm:absolute top-[30px] left-[70px] cursor-pointer flex flex-col">
//                             <h1 className="text-[24px] font-semibold">{item.title}</h1>
//                             <p className="mt-1 text-[14px]">{item.about}</p>
//                             <div className="btn-group mt-[16px] flex gap-3 text-[14px] sm:hidden w-fit">
//                                 {item.btn.map((btnText, btnIndex) => (
//                                     <button key={btnIndex} className="h-[48px] px-[12px] bg-black text-white   cursor-pointer ">
//                                         {btnText}
//                                     </button>
//                                 ))}
//                             </div>
//                             <div className="course-search border border-black flex h-[48px] items-center px-[10px] sm:hidden my-14">
//                                 <input type="text" placeholder="What do you want to learn" className="search w-full h-full" />
//                                 <div className="search-icon w-fit">
//                                     {item.searchIcon}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </main>
//     );
// };

// export default Banner;

// above my with out scroll below with scroll indicator code by chatgpt 


import React, { useState, useEffect, useRef } from "react";
import "./Banner.css";

const Banner = ({ banners }) => {

    // scroll locate
    const [dot, setDot] = useState(0);
    const scrollTimeout = useRef(null);


    // scroll code is sponcer by chatgpt

    const handleScroll = () => {

        if (scrollTimeout.current) {

            clearTimeout(scrollTimeout.current);
        }

        scrollTimeout.current = setTimeout(() => {

            let box = document.querySelector(".banner");
            let width = document.querySelector(".banner-img").clientWidth;
            let scrollLeft = box.scrollLeft;
            let scrollDiff = scrollLeft % width;

            if (scrollDiff !== 0) {

                if (scrollDiff > width / 2) {

                    box.scrollLeft = scrollLeft + (width - scrollDiff);

                } else {

                    box.scrollLeft = scrollLeft - scrollDiff;

                }
            }

            const currentDot = Math.round(box.scrollLeft / width);
            setDot(currentDot);

        }, 100);

    };

    const left = () => {

        let box = document.querySelector(".banner");
        let width = document.querySelector(".banner-img").clientWidth;
        box.scrollLeft -= width;
        setDot(dot - 1 < 0 ? 0 : dot - 1);

    };

    const right = () => {

        let box = document.querySelector(".banner");
        let width = document.querySelector(".banner-img").clientWidth;
        box.scrollLeft += width;
        setDot(dot + 1 >= banners.banner.length ? banners.banner.length - 1 : dot + 1);

    };

    useEffect(() => {

        const box = document.querySelector(".banner");

        const updateDotOnResize = () => {

            const width = document.querySelector(".banner-img").clientWidth;
            const currentDot = Math.round(box.scrollLeft / width);
            setDot(currentDot);

        };

        window.addEventListener('resize', updateDotOnResize);

        return () => {
            window.removeEventListener('resize', updateDotOnResize);
        };

    }, []);

    return (

        <main className="w-full h-fit flex relative">

            {banners.arrows.map((e, i) => (

                <div
                    className={`w-10 hidden sm:block ${i === 0 ? "left-3 " : "right-3"} sm:top-[155px] md:top-[180px] absolute z-50 cursor-pointer`}
                    onClick={() => { i === 0 ? left() : right() }}
                    key={i}
                >
                    <img src={e} alt="" />
                </div>

            ))}

            <div className="droup top-[240px] sm:top-[340px] md:top-[390px] z-30 w-10 flex gap-1">

                {banners.arrows.map((_, i) => (

                    <div
                        className={`dot ${i === dot ? "bg-black" : "bg-white"} w-3 h-3 rounded-full`}
                        key={i} onClick={() => { i === 0 ? left() : right() }}

                    ></div>

                ))}

            </div>
         



            <div className="banner flex w-fit h-full overflow-x-scroll scroll-smooth" onScroll={handleScroll}>

                {banners.banner.map((item, index) => (

                    <div className="img-box flex-shrink-0 relative w-full min-h-[250px] h-[20%]" key={index}>

                        <img src={item.image} alt="Banner" className="banner-img w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover" />

                        <div className="banner-box sm:bg-white w-full h-fit sm:w-[340px] p-[24px] sm:shadow-xl z-30 sm:absolute top-[30px] left-[70px] cursor-pointer flex flex-col">

                            <h1 className="text-[24px] font-semibold">{item.title}</h1>

                            <p className="mt-1 text-[14px]">{item.about}</p>

                            <div className="btn-group mt-[16px] flex gap-3 text-[14px] sm:hidden w-fit">

                                {item.btn.map((btnText, btnIndex) => (

                                    <button key={btnIndex} className="h-[48px] px-[12px] bg-black text-white cursor-pointer">

                                        {btnText}


                                    </button>


                                ))}

                            </div>

                            <div className="course-search border border-black flex h-[48px] items-center px-[10px] sm:hidden my-14">

                                <input type="text" placeholder="What do you want to learn" className="search w-full h-full" />

                                <div className="search-icon w-fit">

                                    {item.searchIcon}

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </main>
    );
};

export default Banner;

