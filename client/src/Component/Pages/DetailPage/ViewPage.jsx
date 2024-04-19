import React from "react";
import NavBar from "../NavBar/NavBar";
import TagCard from "../CARD/TagCard/TagCard";

export default function ViewPage() {
  return (
    <div>
      <div>
        <NavBar />{" "}
      </div>
      <div className="mt-5 ml-5">
        <div className="font-bold text-5xl ">title</div>
        <div className="font-semibold text-2xl mt-2 ">intro</div>
        <div className="flex mt-5 ">
          {" "}
          <div className="">
            <i className="fa-solid fa-user-tie fa-xl "></i>
          </div>
          <div className="ml-2 font-medium text-lg "> creator name </div>{" "}
        </div>
        <div className="mt-1 font-medium ml-2 ">12/03/2024 11:30 PM </div>
        <div>
          <img />
        </div>
        <div className="mt-5 flex ">
          <TagCard tag={"AI"} /> <TagCard tag={"AI"} /> <TagCard tag={"AI"} />{" "}
          <TagCard tag={"AI"} /> <TagCard tag={"AI"} />{" "}
        </div>
        <div>content</div>
      </div>
    </div>
  );
}
