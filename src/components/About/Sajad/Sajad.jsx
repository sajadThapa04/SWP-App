import React from 'react'

export default function Sajad() {
  return (
    <>
<body class="bg-gray-900 text-white font-sans rounded-xl pt-5">
  <div class="min-h-screen flex flex-col items-center justify-center px-6">
    <div class="text-center fade-in">
      <img src="https://via.placeholder.com/150" alt="Sajad Kumar Thapa" 
           class="w-32 h-32 rounded-full mx-auto border-4 border-gray-600 shadow-md animate-pulse"/>

      <h1 class="text-4xl font-bold mt-4">Sajad Kumar Thapa</h1>
      <p class="text-gray-400 mt-2">Entrepreneur | Software Developer | Tech Enthusiast</p>
    </div>

    <div class="mt-8 max-w-3xl fade-in">
      <h2 class="text-2xl font-semibold mb-4">About Me</h2>
      <p class="text-gray-300 leading-relaxed">
        Hello! I'm Sajad Kumar Thapa, a passionate software developer and aspiring entrepreneur from Nepal.
        I have a strong background in IT and a deep love for technology and innovation. My mission is to use
        technology to create solutions that make society better and foster peace and sustainability.
      </p>
    </div>

    <div class="mt-8 flex gap-4 fade-in">
      <a href="#portfolio" 
         class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all rounded-lg shadow-md transform hover:scale-105">
        View Portfolio
      </a>
      <a href="#contact" 
         class="px-6 py-3 bg-green-600 hover:bg-green-700 transition-all rounded-lg shadow-md transform hover:scale-105">
        Contact Me
      </a>
    </div>

    <div class="absolute top-20 left-10 w-12 h-12 bg-indigo-500 rounded-full opacity-70 animate-bounce"></div>
    <div class="absolute bottom-20 right-10 w-16 h-16 bg-green-500 rounded-full opacity-70 animate-bounce delay-150"></div>
    <div class="absolute top-40 right-20 w-10 h-10 bg-pink-500 rounded-full opacity-70 animate-bounce delay-300"></div>

    <footer class="mt-auto py-4 text-center text-gray-500">
      <p>&copy; 2024 Sajad Kumar Thapa. All Rights Reserved.</p>
    </footer>
  </div>
  </body>
    </>
  )
}

