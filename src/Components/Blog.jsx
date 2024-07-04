import React from 'react';

function Blog() {
  return (
        <main class="dark:bg-gray-800  relative overflow-hidden h-screen">
        <header class="h-24 sm:h-32 flex items-center z-30 w-full">
            <div class="container mx-auto px-6 flex items-center justify-between">
                <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
                    blogger.
                </div>
                <div class="flex items-center">
                    <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                        <a href="#" class="py-2 px-6 flex">
                            Home
                        </a>
                        <a href="#" class="py-2 px-6 flex">
                            Modul
                        </a>
                        <a href="#" class="py-2 px-6 flex">
                            Content
                        </a>
                    </nav>
                    <button class="lg:hidden flex flex-col ml-4">
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                    </button>
                </div>
            </div>
        </header>
        <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
            <div class="container mx-auto px-6 flex relative py-16">
                <div class="mt-20 sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    
                    <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Hi
                        <span class="mt-4 text-5xl sm:text-3xl mb-3">
                            Welcome to Sahira Blog
                        </span>
                    </h1>
                    <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                        Selamat datang di Blog ini. Sahira Oktavia disini akan membagikan konten dan artikel yang sangat berguna untuk perkuliahan. Tapi, jangan lupa difollow dan ikuti terus Blog ini ya!
                    </p>
                    <div class="flex mt-8">
                        <a href="https://www.instagram.com/sahira__oktavia?igsh=MXkxbjB4Zm83M2djdQ==" target="_blank" class=" py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Follow me
                        </a>
                        {/* <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                            Read more
                        </a> */}
                    </div>
                </div>
                <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative ml-[300px]">
                    <img src="#" class="max-w-xs md:max-w-sm m-auto"/>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Blog;
