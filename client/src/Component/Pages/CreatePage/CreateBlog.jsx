import React, { useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import JoditEditor from "jodit-react";
import TechBloger from "../../Image/TechBloger.png"

export default function CreateBlog() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="pl-5 pr-5" >
        <form className="mt-5" >
          <div className="flex flex-col" >
            <label className="text-2xl font-bold " >Tittle</label>
            <input className="border border-slate-400 p-2 rounded-md text-lg "  type="text" placeholder="Enter the Tittle" />
          </div>
          <div className="flex flex-col mt-5 " >
            <label className="text-2xl font-bold " >Intro</label>
            <input  className="border border-slate-400 p-2 rounded-md text-lg " type="text" placeholder="enter the intro" />
          </div>
          <div className="flex flex-col mt-5" >
            <div> <img src={TechBloger} className="h-38"/></div>
            <div className="h-10 mt-4 " >
              <label htmlFor="imageUpload" className="border mt-2  bg-blue-500 text-white p-2 rounded-md font-bold "  >Upload Image</label>
              <input type="file" id="imageUpload"  className="hidden" />
            </div>
          </div>
          <div>
            <div></div>
            <div className="flex flex-col " >
              <label className="text-2xl font-bold " >Tag</label>
              <input className="border border-slate-400 p-2 rounded-md text-lg mt-2 "  type="text" />
            </div>
          </div>

          <div className="mt-10 mb-20">
            <label className="text-2xl font-bold"  >Content</label>
            <JoditEditor
            className="mt-3"
              ref={editor}
              value={content}
              onChange={newContent=>{setContent(newContent)}}
              tabIndex={5}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
