import React from 'react';



const Companies = ({detail}) => {
   
    return (
        <main className="companies py-[34px] px-[24px]">
            <div className="text-center">
                <p className='text-[#6A6F73] text-[16px] '>{detail.title}</p>

                <div className="companies-image grid grid-cols-4 md:grid-cols-8 mt-3   " >
                    {detail.companyImages.map((e, i) => {
                        return <img key={i} src={e} alt="" srcSet="" className='w-16 mx-auto m-3  '></img>
                    })}





                </div>



            </div>



        </main>
    )
}

export default Companies