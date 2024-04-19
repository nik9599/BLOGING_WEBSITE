import React from 'react'

export default function DisplayCard({tittle ="this is sampel testing tittle" , intro ="we are trying to build something greate" , imageUrl = null}) {
  return (
    <div className='h-[300px] w-[300px] flex justify-center shadow-lg mx-auto mt-10 rounded-lg  ' >
       { imageUrl != null && <div>
         <img src={imageUrl} alt='blog image' />
       </div>}
       <div>
         <div className='font-semibold text-4xl mt-10 ml-3 ' >{tittle}</div>
         <div className='font-medium text-lg mt-10 ml-3 ' >{intro}</div>

       </div>
    </div>
  )
}
