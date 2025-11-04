import React from 'react'
export default function ProfilePage() {
    return <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2  my-6'>
            User Profile
            <div>
                Name: <span className='font-bold'>John</span>
            </div>
            <div>
                Email: <span className='font-bold'>uboho@yahoo.com</span>
            </div>
        </div>
    </div>
}