import React from 'react'
import './Footer.css'


const Footer = ({footer}) => {
   
    return (
        <main className='main bg-[#2D2F31]   text-[#FFFFFF]  text-[18px]'>
            <div className="main__section-one flex flex-col sm:flex-row gap-4 sm:gap-2 py-[24px] px-[24px] font-semibold ">
                <div className="main__section-one__title w-full">{footer.title}</div>
                <div className='flex gap-2 w-full justify-between'>
                    {footer.images.map((e, i) => {
                        return <div key={i} className="main__section-one__image"><img src={e} className='' alt="" srcSet="" /></div>
                    })}

                </div>
            </div>
            <div className="main__section-two text-[14px] px-[24px] py-[32px]   ">
                <div className="main__section-two__s1 flex flex-col sm:flex-row gap-6 sm:gap-0 ">
                    <div className=" flex w-full justify-between flex-col sm:flex-row gap-2 sm:gap-0 order-2 sm:order-1">
                        {footer.allHeading.map((e, i) => {
                            return <div key={i} className=" flex flex-col gap-2" >
                                {e.listOne.map((s, h) => {
                                    return <p key={h}>{s}</p>

                                })}
                            </div>
                        })}

                    </div>
                    <div className="w-full flex sm:justify-end items-start order-1 sm:order-2 ">
                        <button type="button" className='btn p-2 flex justify-center items-center gap-1 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                            {footer.langrage}</button>
                    </div>

                </div>



            </div>
            <div className="main__section-two flex flex-col sm:flex-row justify-between px-[24px] pb-[24px] gap-3">
                <img src={footer.WebsiteName} alt="" className='w-28' srcSet=''  />
                <p className='text-[14px]'>{footer.copyRight}</p>

            </div>

        </main>
    )
}

export default Footer