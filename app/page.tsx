import React from 'react'
import Navbar from './Components/Navbar'
import Release from './Components/Release'
import Footer from './Components/Footer'
import Videos from './Components/Videos'

export default function page() {
  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar />
      <div className='relative w-full h-full flex flex-col'>
        <div className='w-full h-[500px] flex flex-col overflow-hidden'>
          <img
            className='w-full h-full object-cover'
            src="cover.png"
            alt="Cover Image"
          />
        </div>

        <div className='absolute bottom-0 w-full py-6 bg-gray-800 text-white text-xl overflow-clip text-center text '>
          <h1 className='word-nowrap'>John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator/</h1>
        </div>

        <div className='absolute bottom-[-80px] left-[100px] bg-white flex w-[550px] h-[250px] rounded-2xl shadow-lg shadow-gray-400'>
          <div>
            <img
              className='w-[350px] h-full object-cover rounded-s-2xl'
              src="user.jpeg"
              alt="" />
          </div>
          <div className='w-full h-full bg-gray-100 rounded-e-2xl flex flex-col px-8 py-6'>
            <div className='w-full flex justify-between items-start mb-[20px]'>
              <h1 className='text-2xl font-semibold'>DAN MACE</h1>
              <h1 className='text-md text-gray-400'>/Johny_Films/</h1>
            </div>

            <div className='flex flex-col items-start gap-4'>
              <h1 className='text-md font-semibold text-gray-500'>Bio</h1>
              <p className='text-[15px] text-gray-500'>
                Simply a film fan creating original content for YouTube. Let’s Collaborate.
              </p>
            </div>

            <div className='mt-[20px] w-full  bg-gray-600 rounded-md p-[1px]'>
              <div className='w-1/2 px-6 py-1 bg-white rounded-md text-center'>
                Creator
              </div>
            </div>
          </div>
        </div>
      </div>
      <Release />
      <Videos />
      <Footer />
    </div>
  )
}
