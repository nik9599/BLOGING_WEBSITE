import React, {useEffect} from 'react'
import NavBar from '../NavBar/NavBar';
import DisplayCard from '../CARD/DisplayCard/DisplayCard';

export default function LandingPage() {
  useEffect(()=>{
       // get Request
  },[])
  return (
    <div className='w-full' >
      <div className='w-full'><NavBar/></div>
      <div className='w-full h-[80vh] bg-slate-500' >
         BRING YOUR IDEA 
      </div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 ml-10 ' >

        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>
        <DisplayCard/>

      </div>
    </div>
  )
}
