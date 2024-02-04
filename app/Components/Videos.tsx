import { Plus } from 'lucide-react'
import React from 'react'

export default function Videos() {
    return (
        <div className='relative w-full px-4 md:px-[100px] flex flex-wrap gap-6 mt-[50px] mb-[300px] p-6 justify-center md:justify-normal'>
            <div className='w-[284px] h-[312px] rounded-xl bg-gray-200 flex flex-col justify-center items-center'>
                <div className='absolute w-full h-full flex justify-center items-center'>
                    <Plus size={50} color='gray' />
                </div>
                <div className='mt-auto pb-[20px] text-center text-[15px] text-gray-400'>
                    You haven’t uploaded any <br /> videos with aBit yet. Add now!
                </div>
            </div>

            <div
                className='w-[284px] h-[312px] rounded-2xl bg-gray-200 flex justify-between flex-col bg-cover bg-center shadow-xl shadow-gray-700 p-4'
                style={{ backgroundImage: "url('user2.png')" }}>
                <div className='flex w-full h-full justify-between flex-col'>
                    <h1 className='text-xl font-bold text-white'>The Sound of Silence</h1>

                    <div className='flex justify-between p-3 bg-gray-200 bg-opacity-25 text-sm text-white font-bold rounded-2xl'>
                        <div className='flex flex-col flex-1 items-center'>
                            <h1>Shares</h1>
                            <h1>317</h1>
                        </div>
                        <div className='flex flex-col flex-1 items-center'>
                            <h1>Offered</h1>
                            <h1>75%</h1>
                        </div>
                        <div className='flex flex-col flex-1 items-center'>
                            <h1>Raised</h1>
                            <h1>$9510</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
