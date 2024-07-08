import React from 'react'

const Bgblur = ({nav}) => {
  return (
    <div className={`main bg-black  opacity-50 sm:hidden z-40 w-full h-[100vh] fixed top-0 ${nav===1 ?"block":"hidden"}`}>

    </div>
  )
}

export default Bgblur