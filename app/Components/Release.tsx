import React from 'react'

export default function Release() {
    return (
        <div className='w-full pt-[380px] md:pt-0 px-4 flex-col md:flex-row md:px-[100px] flex justify-between items-start mt-[140px] gap-[30px]'>
            <div className='flex flex-col items-start'>
                <h1 className='text-3xl font-semibold'>Releases</h1>
                <p className='mt-[10px] text-md text-gray-400'>Videos that you upload in collobration with aBit appear here</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='flex flex-col border-l-[1px] border-l-gray-400 px-4 gap-2'>
                    <h1 className='text-xl font-semibold text-gray-700'>1</h1>
                    <p className='text-[15px] text-gray-500'>Shared <br /> Videos</p>
                </div>
                <div className='flex flex-col border-l-[1px] border-l-gray-400 px-4 gap-2'>
                    <h1 className='text-xl font-semibold text-gray-700'>$9510</h1>
                    <p className='text-[15px] text-gray-500'>Funds <br /> Raised</p>
                </div>
                <div className='flex flex-col border-l-[1px] border-l-gray-400 px-4 gap-2'>
                    <h1 className='text-xl font-semibold text-gray-700'>317</h1>
                    <p className='text-[15px] text-gray-500'>Co-owner <br /> Community</p>
                </div>
                <div className='flex flex-col border-l-[1px] border-l-gray-400 px-4 gap-2'>
                    <h1 className='text-xl font-semibold text-gray-700'>#3804</h1>
                    <p className='text-[15px] text-gray-500'>Co-owner <br /> Earning</p>
                </div>
            </div>

        </div>
    )
}
