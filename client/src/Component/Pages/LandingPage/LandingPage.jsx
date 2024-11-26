import React, {useEffect} from 'react'
import NavBar from '../NavBar/NavBar';
import DisplayCard from '../CARD/DisplayCard/DisplayCard';
import Banner from "../../Image/Banner.jpeg"

export default function LandingPage() {
  useEffect(()=>{
       // get Request
  },[])
  return (
    <div className="w-full min-h-screen bg-black">
      <NavBar/>
    <div className="relative w-full h-[800px]">
      < div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`
        }}
      >
           <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />

        <h1 className="relative flex items-center justify-center h-full font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center px-4">
          Bring Your Idea
        </h1>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    
      </div>
    </div>
    <div className="relative -mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-8">
      {[1, 2, 3, 4,5,6,7,8].map((item) => (
        <DisplayCard title='this is testinhg'/>
      ))}
    </div>
  </div>
  )
}
