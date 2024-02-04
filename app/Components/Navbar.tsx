import { Bell, ChevronDown, Wallet } from 'lucide-react'
import React from 'react'

export default function Navbar() {
    return (
        <div className='w-full flex px-[100px] p-[30px] justify-between items-center'>
            <h1 className='text-2xl font-semibold'>aBit</h1>

            <div className='flex gap-4 items-center '>
                <button className='px-6 py-3 rounded-full border-2 border-purple-800 text-sm text-gray-800 font-semibold'>
                    Share new Video
                </button>
                <Wallet size={25} />
                <Bell size={25} />
                <div className='w-[40px] h-[40px] rounded-full border-2 border-purple-800'>
                    <img
                        className='w-full rounded-full'
                        src="user.jpeg" alt="user" />
                </div>
                <ChevronDown size={30} />
            </div>
        </div>
    )
}
