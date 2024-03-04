import React from 'react';


export const Informations = ({ user }) => {
    const { id, name, DOB, Role } = user//eslint disable
    return (
        <div className='mt-12'>

<div className="m-8 p-20 bg-zinc-900 rounded-3xl shadow hover:bg-zinc-800 flex flex-col justify-around relative">
    <div className="absolute top-0 right-0">
      <span className="w-12 h-12 rounded-full border border-black bg-zinc-800 flex items-center justify-center text-white text-xl font-bold">{user.id}</span>
    </div>

    <div className='flex'>
      <span className='text-white'>EMP ID :</span>
      <span className='text-white ml-10 sm:text-xl text-sm'>{user.id}</span>
    </div>
    <div className='mt-8 flex'>
      <span className='text-white'>Name:</span>
      <span className='text-white ml-5 sm:text-xl text-sm'>{user.name}</span>
    </div>
    <div className='mt-8 flex'>
      <span className='text-white'>DOB:</span>
      <span className='text-yellow-700 ml-8 sm:text-xl text-sm'>{user.DOB}</span>
    </div>
    <div className='mt-8 flex'>
      <span className='text-white'>Role:</span>
      <span className='text-green-800 ml-10 sm:text-xl text-sm'>{user.Role}</span>
    </div>
  </div>


        </div>
    )
}
