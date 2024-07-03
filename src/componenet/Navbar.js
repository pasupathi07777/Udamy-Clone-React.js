import React from "react";
import "./Navbar.css";


const Navbar = ({ datails }) => {

  return (
    <nav className="navbar w-full h-[56px] md:h-[72px] bg-white p-[4px] sm:p-0 sm:px-[24px] flex items-center justify-between shadow-xl flex-grow-1">
      <div className="burgur px-[12px] w-[49px] md:hidden">
        {datails.burger}

      </div>
      <div className="logo h-[34px] w-full md:w-fit flex justify-center ps-[48px] md:ps-0  ">
        <img src={datails.title} alt="" className=" h-full" />
      </div>
      <div className="categories text-[14px] px-[12px] hidden md:block  ">
        <a href="#">{datails.categories}</a>
      </div>
      <div className=" search   text-[14px] px-[12px] md:w-[22%] border border-transparent md:flex   md:border-black   justify-center items-center ">
        <div className="search-icon w-[49px]  ">

          {datails.searchIcon}

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
        <div className="cart flex justify-center items-center  w-[49px] cursor-pointer">{datails.cartIcon}

        </div>
        <div className="login hidden md:flex justify-center items-center cursor-pointer">{datails.loginBtn}</div>
        <div className="signup bg-black text-white hidden md:flex justify-center items-center font-semibold cursor-pointer">{datails.signupBtn}</div>
        <div className="icon-lan hidden justify-center items-center md:flex  cursor-pointer">
          {datails.earth}
        </div>
      </div>
    </nav>
  );
};

export default Navbar



