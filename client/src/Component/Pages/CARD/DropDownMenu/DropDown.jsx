import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../../../index.css";

export default function DropDown() {
  const [active, setActive] = useState(false);
  const [category, setCategory] = useState(false);
  const isUserLoggedIn = useSelector((state) => state.login.login.isLogedIn);

  return (
    <div className="relative  ">
      <div
        onClick={() => {
          setActive(!active);
          setCategory(false);
        }}
      >
        {" "}
        {active ? (
          <div className="flex justify-end mt-4">
            {" "}
            <i className="fa-solid fa-x fa-xl  "></i>{" "}
          </div>
        ) : (
          <i className="fa-solid fa-bars fa-xl "></i>
        )}{" "}
      </div>
      {active && (
        <div className="absolute right-0 bg-white  w-[2000%] rounded-lg top-10  flex flex-col justify-center items-center shadow-xl ">
          {!isUserLoggedIn && (
            <div className="h-10 flex  w-[100%] justify-center align-middle ">
              {" "}
              LogIn{" "}
            </div>
          )}
          <div className="h-10 flex  w-[100%] justify-center align-middle ">
            {" "}
            Home{" "}
          </div>
          <div className="h-10 flex  w-[100%] justify-center align-middle ">
            {" "}
            Create{" "}
          </div>
          <div className="h-10 flex  w-[100%] justify-center align-middle ">
            {" "}
            About{" "}
          </div>
          <div className="h-10 flex w-[100%] justify-center align-middle ">
            {" "}
            Contact{" "}
          </div>
          <div
            className="h-10 flex w-[100%] justify-center align-middle "
            onClick={() => {
              setCategory(!category);
            }}
          >
            {" "}
            <div> Category </div>
            <div className="ml-5" >
              {category ? (
                <i class="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </div>{" "}
          </div>
          {category && (
            <div>
              <div className="h-10 flex w-[100%] justify-center align-middle ">
                Language
              </div>
              <div className="h-10 flex w-[100%] justify-center align-middle ">
                System Design
              </div>
              <div className="h-10 flex w-[100%] justify-center align-middle ">
                Cloud
              </div>
              <div className="h-10 flex w-[100%] justify-center align-middle ">
                DEV OPS
              </div>
              <div className="h-10 flex w-[100%] justify-center align-middle ">
                AI/ML
              </div>
            </div>
          )}
          {isUserLoggedIn && <div> Profile </div>}
          {isUserLoggedIn && <div> LogOut </div>}
        </div>
      )}
    </div>
  );
}
