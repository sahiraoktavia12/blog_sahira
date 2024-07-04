import * as React from "react";
import { useState } from "react";

function NavigationItem({ children, className }) {
  return <div className={`self-stretch my-auto ${className}`}>{children}</div>;
}

function Navbar() {

  const [play,setPlay] = useState(false)
  const togglePlay = () => {
    setPlay(!play);
  };
  return (
    <header
    className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <img className="h-7 w-auto brightness-0" src="../src/assets/LOGOS REBRANDING text.png" alt=""/>
                    <p className="sr-only">Website Title</p>
                </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-6 ml-4">
                <a aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-[16px] font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="">Home</a>
                <a className="inline-block rounded-lg px-2 py-1 text-[16px] font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Project</a>
                <a className="inline-block rounded-lg px-2 py-1 text-[16px] font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Repository</a>
            </div>
            <div className="flex items-center justify-end gap-3">
            <ul className="flex flex-col gap-2 mx-auto mt-0">
      {/* Button Github */}
      <li>
        <details className="group">
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex gap-2">
              <img
                className="w-6 h-6 rounded-lg"
                src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                alt=""
              />
              <span>Look at me</span>
            </span>
            <svg
              className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </summary>
          <article className="fixed px-4 pb-4 border-gray-100 bg-white/80 shadow backdrop-blur-lg md:rounded-3xl mt-4 ml-12">
            <ul className="flex flex-col gap-4 pl-2 mt-4">

            {/* Exercise */}
            <li className="flex gap-2 items-center">
            <img
                className="w-6 h-6"
                src="https://img.icons8.com/?size=100&id=cksgiVxzNe4j&format=png&color=000000"
                alt="Google Logo"/>
            <a href="">
            Exercise
            </a>
            </li>

              {/* Task */}
              <li className="flex gap-2 items-center">
            <img
                className="w-6 h-6"
                src="https://img.icons8.com/?size=100&id=61221&format=png&color=000000"
                alt="Google Logo"/>
            <a href="">
            Task
            </a>
            </li>
              {/* Play Sound */}
                <button onClick={togglePlay} className="text-red-500 text-sm px-1 py-1 hover:bg-red-200 rounded-md" type="submit" >
                  Play Sound
                </button>
            </ul>
          </article>
        </details>
      </li>
                </ul>  
            </div>
        </div>
    </div>
</header>
  );
}

export default Navbar;
