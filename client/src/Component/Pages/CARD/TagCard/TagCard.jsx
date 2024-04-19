import React from 'react'

export default function TagCard({tag}) {
  return (
    <div className='w-[50px] flex justify-center rounded-3xl font-medium text-white ml-2 bg-blue-300' >
      {tag}
    </div>
  )
}
