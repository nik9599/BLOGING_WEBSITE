import React from "react";
import TechBloger from "../../Image/TechBloger.png";
import "../../../index.css";
import DropDown from "../CARD/DropDownMenu/DropDown.jsx";
import {useNavigate} from "react-router-dom"

export default function NavBar() {
  const screenWidth = window.screen.width;
  const navigator = useNavigate()

  return (
    <div className="flex w-[100%] h-[50px] justify-between align-top ">
      <div className="w-[50%]  flex justify-start align-top ml-5 mt-2 " onClick={()=>{navigator('/')}} >
        {" "}
        <img src={TechBloger} width={"100px"} height={"30px"} alt="logo" />{" "}
      </div>
      <div className="w-[50%] flex justify-end align-top mr-7 mt-4  " >{screenWidth < 600 ? <DropDown /> : <div> </div>}</div>
    </div>
  );
}
