import React from "react";
import udamy_img from "../img/udamy-img.png";
import "./Navbar.css";

const Navbar = () => {
  let datails = {
    title: udamy_img,
    categories: "categories",
    categories_2: "Plans & Price",
    categories_3: "Udamy Business",
    categories_4: "Tech of Udamy",
  };
  return (
    <nav className="navbar w-full h-[56px] md:h-[72px] bg-white p-[4px] sm:p-0 sm:px-[24px] flex items-center justify-between shadow-xl flex-grow-1">
      <div className="burgur px-[12px] w-[49px] md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="logo h-[34px] w-full md:w-fit flex justify-center ps-[48px] md:ps-0  ">
        <img src={datails.title} alt="" className=" h-full" />
      </div>
      <div className="categories text-[14px] px-[12px] hidden md:block  ">
        <a href="#">{datails.categories}</a>
      </div>
      <div className=" search   text-[14px] px-[12px] md:w-[22%] border border-transparent md:flex   md:border-black   justify-center items-center ">
        <div className="search-icon w-[49px]  ">
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
        <input
          type="text"
          placeholder="Search for anything "
          className="hidden md:block"
        />
      </div>
      <div className="categories categories_2  text-[14px] px-[12px] hidden   ">
        <a href="#">{datails.categories_2}</a>
      </div>
      <div className="categories categories_3 text-[14px] px-[12px] hidden    ">
        <a href="#">{datails.categories_3}</a>
      </div>
      <div className="categories categories_4 text-[14px] px-[12px] hidden    ">
        <a href="#">{datails.categories_4}</a>
      </div>

      <div className="log flex gap-2  text-[14px]  ">
        <div className="cart flex justify-center items-center px-[12px] w-[49px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            z
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <div className="login hidden md:flex justify-center items-center">Log in</div>
        <div className="signup bg-black text-white hidden md:flex justify-center items-center font-semibold">Sign up</div>
        <div className="icon-lan hidden justify-center items-center md:flex w-[40px">
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
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
