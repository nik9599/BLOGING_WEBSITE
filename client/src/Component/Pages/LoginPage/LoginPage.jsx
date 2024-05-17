import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "../../../index.css";

export default function LoginPage() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-row justify-center items-center h-[70vh]  ">
        <div className="flex flex-col border-2  shadow-current  w-[300px] h-[400px] mb-10 ">
          <div className=" h-10 flex justify-center items-center text-lg font-bold ">
            Login your account
          </div>
          <div className="flex flex-col  ">
            <form className="flex flex-col p-5 ">
              <label className="font-semibold">Email</label>
              <input type="text" className="border-2 rounded-lg mt-2 text-lg pl-1 " />

              <labl className="font-semibold"> password</labl>
              <input type="password" className="border-2 rounded-lg mt-2 text-lg pl-1 " />

              <input
                type="submit"
                value={"Login"}
                className="mt-5 border-2 h-9 w-16 rounded-xl mx-auto bg-blue-500 font-semibold text-white "
              />
            </form>
            <div className="flex flex-col   items-center justify-center h-[100px] ">
              <p className="mb-10 text-zinc-400 ">OR</p>
              <p> Craete an account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
