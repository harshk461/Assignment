'use client'

import { Bell, ChevronDown, Menu, Wallet, X } from 'lucide-react'
import React, { useState } from 'react'

export default function Navbar() {
    const [menu, setMenu] = useState<Boolean | null>(null);
    return (
        <div className='relative w-full flex px-[30px] md:px-[100px] p-[30px] justify-between items-center'>
            <h1 className='text-2xl font-semibold'>aBit</h1>

            <div className='hidden gap-4 items-center md:flex'>
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

            <div
                onClick={() => { setMenu(true) }}
                className='md:hidden p-2 border-2 border-gray-300 rounded-xl'>
                <Menu size={30} />
            </div>

            {/* Menu */}

            <div
                className={`fixed lg:hidden left-0 top-0 w-full h-screen flex-col z-50 bg-gray-600 bg-opacity-55 p-6
                ${menu === true && 'windowO flex'}
                ${menu === false && 'windowC'}
                ${menu === null && 'hidden'}`}>

                <div
                    onClick={() => { setMenu(false) }}
                    className='p-2 border-2 border-gray-300 rounded-xl w-fit self-end'>
                    <X size={30} color='white' />
                </div>
                <div className='flex flex-col w-full items-center mt-[30px] justify-center gap-4'>
                    <button className='px-6 py-3 rounded-full border-2 border-purple-800 text-sm text-gray-800 font-semibold'>
                        Share new Video
                    </button>
                    <div className='flex gap-3 items-center'>
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
            </div>
        </div>
    )
}
