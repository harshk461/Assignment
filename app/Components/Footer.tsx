import React from 'react'

export default function Footer() {
    return (
        <footer className='float-bottom w-full flex justify-between items-center py-[100px] px-[150px] border-t-[1px] border-t-gray-300'>
            <div className='flex flex-col gap-4 items-start'>
                <h1 className='text-4xl font-bold'>aBit</h1>
                <h1 className='text-lg'>Changing The Way In Which <br /> Creators and Fans Interact</h1>
            </div>

            <div className='flex flex-col gap-2 font-semibold text-lg border-l-2 border-l-gray-300 px-4'>
                <h1>Home</h1>
                <h1>Are you a Creator?</h1>
                <h1>Support</h1>
            </div>
        </footer>
    )
}
