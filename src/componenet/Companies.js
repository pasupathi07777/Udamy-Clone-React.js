import React from 'react';
import imgOne from '../img/company/amazon.png'
import imgTwo from '../img/company/apple.png'
import imgThree from '../img/company/cisco.png'
import imgFour from '../img/company/dell.png'
import imgFive from '../img/company/google.png'
import imgSix from '../img/company/samsung.png'
// import imgSeven from '../img/company/hewlett_packard_enterprise_logo.svg'
// import imgEight from '../img/company/procter_gamble_logo.svg'

const Companies = () => {
    let details = {
        title: "Trusted by over 15,000 companies and millions of learners around the world",
        companyImages: [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix]
    }
    return (
        <main className="companies p-[24px]">
            <div className="px-[24px] py-[32px] text-center">
                <p className='text-[#6A6F73] text-[16px] '>{details.title}</p>

                <div className="companies-image grid grid-cols-4 sm:grid-cols-6 text-center mt-5  " >
                    {details.companyImages.map((e, i) => {
                        return <img src={e} alt="" srcset="" className='w-16 mx-auto  '></img>
                    })}





                </div>



            </div>



        </main>
    )
}

export default Companies