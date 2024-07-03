import React from "react";
import "./Banner.css";




const Banner = ({banners}) => {
   

    return (
        <main className=" w-full h-fit flex ">
            <div className="banner flex w-fit h-full overflow-x-auto ">
                {banners.map((item, index) => (
                    <div className="img-box flex-shrink-0 relative h-[20%] w-full min-h-[250px]  " key={index}>
                        <img
                            src={item.image}
                            alt="Banner"
                            className="w-full h-full min-h-[250px] object-cover"
                        />
                        <div className="banner-box sm:bg-white w-full h-fit sm:w-[340px] p-[24px] sm:shadow-xl sm:absolute top-[30px] left-[50px] cursor-pointer flex flex-col">
                            <h1 className="text-[24px] font-semibold">
                                {item.title}
                            </h1>
                            <p className="mt-1 text-[14px]">
                                {item.about}
                            </p>
                            <div className="btn-group mt-[16px] flex gap-3 text-[14px] sm:hidden w-fit">
                                {item.btn.map((btnText, btnIndex) => (
                                    <button
                                        key={btnIndex}
                                        className="h-[48px] px-[12px] bg-black text-white">
                                        {btnText}
                                    </button>
                                ))}
                            </div>
                            <div className="course-search border border-black flex h-[48px] items-center px-[10px] sm:hidden my-14">
                                <input
                                    type="text"
                                    placeholder="What do you want to learn"
                                    className="search w-full h-full"
                                />
                                <div className="search-icon w-fit">{item.searchIcon}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Banner;
