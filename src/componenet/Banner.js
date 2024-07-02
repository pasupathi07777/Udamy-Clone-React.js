import React from "react";
import "./Banner.css";
import banner_1 from "../img/banner-1.jpg";
import banner_2 from "../img/banner-2.jpg";

const Banner = () => {
    return (
        <main className="overflow-hidden w-full max-h-fit ">
            <div className="banner flex w-fit h-full  ">
                <div className="img-box w-fit flex-shrink-0 relative h-[20%] min-h-[250px]  ">
                    <img
                        src={banner_2}
                        alt=""
                        c
                        className="w-full h-full min-h-[250px] object-center object-fill       "
                    ></img>
                    <div className="banner-box  sm:bg-white sm:w-[340px]  p-[24px] sm:shadow-xl sm:absolute top-[30px] left-[50px]  cursor-pointer  ">
                        <h1 className="text-[24px]  font-semibold">
                            Learning that gets you
                        </h1>
                        <p className="mt-1 text-[14px]">
                            Skills for your present (and your future). Get started with us.
                        </p>
                        <div className="cource-search border border-black flex h-[48px] items-center px-[10px] sm:hidden my-14  ">
                            <input
                                type="text"
                                placeholder="What do you want to learn"
                                className="search w-full h-full "
                            />
                            <div className="search-icon w-fit">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-box w-fit flex-shrink-0 relative h-[20%] min-h-[250px] ">
                    <img
                        src={banner_1}
                        alt=""
                        className="w-full h-full min-h-[250px] object-center object-fill  "
                    />
                    <div className="banner-box  sm:bg-white sm:w-[340px]  p-[24px] sm:shadow-xl sm:absolute top-[30px] left-[50px]  cursor-pointer ">
                        <h1 className="text-[24px]  font-semibold">
                            Skills that drive you forward
                        </h1>
                        <p className="mt-1 text-[14px]">
                            Technology and the world of work change fast — with us, you’re
                            faster. Get the skills to achieve goals and stay competitive.
                        </p>
                        <div className="btn-group mt-[16px] flex gap-3 text-[14px] sm:hidden ">
                            <button className="h-[48px] px-[12px] bg-black text-white ">
                                Plan for individuals
                            </button>
                            <button className="h-[48px] px-[12px] bg-white border border-black">
                                Plan for organization
                            </button>
                        </div>
                        <div className="cource-search border border-black flex h-[48px] items-center px-[10px] sm:hidden mt-8 ">
                            <input
                                type="text"
                                placeholder="What do you want to learn"
                                className="search w-full h-full "
                            />
                            <div className="search-icon w-fit">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;
