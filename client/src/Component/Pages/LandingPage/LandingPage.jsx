import React, {useEffect} from 'react'
import NavBar from '../NavBar/NavBar';
import DisplayCard from '../CARD/DisplayCard/DisplayCard';

export default function LandingPage() {
  useEffect(()=>{
       // get Request
  },[])
  return (
    <div className='' >
      <div><NavBar/></div>
      <div className='grid grid-cols-1 gap-4 ' >

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
