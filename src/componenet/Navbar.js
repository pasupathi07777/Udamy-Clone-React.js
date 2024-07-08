import React, { useState } from "react";
import "./Navbar.css";


const Navbar = ({ datails, setnav, ccc }) => {
  let [boxOne, setboxOne] = useState(0)
  let [boxTwo, setboxTwo] = useState(0)
  let [boxthree, setboxthree] = useState(0)
  const handleMouseEnter = (rec) => {
    if (rec === "O") {
      setboxOne(1)
    } else if (rec === "T") {
      setboxTwo(1)
    } else {
      setboxthree(1)
    }


  };

  const handleMouseLeave = (rec) => {
    if (rec === "O") {
      setboxOne(0)
    } else if (rec === "T") {
      setboxTwo(0)
    } else {
      setboxthree(0)
    }

  };





  return (

    <nav className="navbar w-full h-[56px] md:h-[72px] right-5  bg-white p-[4px] sm:p-0 sm:px-[24px] flex items-center justify-between shadow-xl flex-grow-1 z-0  ">





      <div className="burgur px-[12px] w-[49px] md:hidden " onClick={() => { setnav(1); ccc() }}>

        {datails.burger}


      </div>

      <div className="logo h-[34px] w-full md:w-fit flex justify-center ps-[48px] md:ps-0  ">

        <img src={datails.title} alt="" className=" h-full" />

      </div>

      <div className="categories-1 text-[14px] px-[12px] hidden md:block h-full  ">

        <p className="cursor-pointer  h-full flex justify-center items-center">{datails.categories}</p>

      </div>

      <div className=" search w-fit text-[14px] px-[12px] md:w-[45%] border border-transparent md:flex   md:border-black   justify-center items-center ">

        <div className="search-icon w-[49px]  ">



          {datails.searchIcon}


        </div>

        <input type="text" placeholder="Search for anything " className="hidden md:block" />

      </div>

      <div className="categories categories_2  text-[14px] px-[12px] hidden h-full    ">

        <p className="cursor-pointer  h-full flex justify-center items-center" >{datails.categories_2}</p>

      </div>

      <div onMouseEnter={() => handleMouseEnter("T")}
        onMouseLeave={() => handleMouseLeave("T")} className="categories categories_3 h-full text-[14px] px-[12px] hidden relative     ">

        <p className="cursor-pointer  h-full flex justify-center items-center">{datails.categories_3}</p>


      </div>


      <div className="categories_4 hidden text-[14px] px-[12px]   h-full    " >

        <p
          onMouseEnter={() => handleMouseEnter("O")}
          onMouseLeave={() => handleMouseLeave("O")} className="cursor-pointer h-full flex justify-center items-center " >{datails.categories_4}</p>

      </div>


      <div className="log flex gap-2  text-[14px] h-full items-center  ">

        <div className="cart flex justify-center h-full items-center cursor-pointer  w-[49px] " onMouseEnter={() => handleMouseEnter("C")}
          onMouseLeave={() => handleMouseLeave("C")}>

          {datails.cartIcon}

        </div>

        <div className="login hidden md:flex justify-center items-center   cursor-pointer hover:bg-[#E3E7EA]">

          {datails.loginBtn}

        </div>

        <div className="signup bg-black text-white hidden md:flex justify-center items-center font-semibold cursor-pointer hover:bg-opacity-80">

          {datails.signupBtn}

        </div>
        <div className="icon-lan hidden justify-center items-center md:flex  cursor-pointer hover:bg-[#E3E7EA]">

          {datails.earth}

        </div>

       

        <div className={`pop-up__one flex-col   bg-white absolute hover:flex text-black  z-50 w-[300px] top-20 p-[24px] h-fit right-[25%] text-center shadow-xl  ${boxTwo === 0 ? "hidden" : "flex "}  `}>
          {datails.popup.popOne.map((e, i) => (
            i === 0 ? <h1 key={i} className="font-semibold">{e}</h1> : <button key={i} className="bg-black mt-3 w-full text-white font-semibold px-2 py-2">{e}</button>


          ))}


        </div>
        <div className={`pop-up__two   flex-col bg-white absolute hover:flex text-black  z-50 w-[300px] top-20 p-[24px] h-fit right-[20%] text-center shadow-xl ${boxOne === 0 ? "hidden" : "flex"}  `}>
          {datails.popup.popTwo.map((e, i) => (
            i === 0 ? <h1 key={i} className="font-semibold">{e}</h1> : <button key={i} className="bg-black mt-3 w-full text-white font-semibold px-2 py-2">{e}</button>


          ))}


        </div>
        <div className={`pop-up__three   flex-col bg-white absolute hover:flex text-black  z-50 w-[300px] top-20 p-[24px] h-fit right-[10%] text-center shadow-xl ${boxthree === 0 ? "hidden" : "flex"}  `}>
          {datails.popup.popThree.map((e, i) => (
           
            <p key={i} className={`${i === 0 ? "text-[#73777B]" : "text-[#3B198F] mt-3 font-semibold"}`}>{e}</p>


          ))}


        </div>

      </div>

    </nav >
  );
};

export default Navbar
