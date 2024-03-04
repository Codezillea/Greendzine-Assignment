import React from 'react'

export const Productivity = () => {
  return (

    <div className='m-auto'>
      <div className=" m-12 flex justify-center">
      <div className="w-full h-16 flex justify-center bg-zinc-600  rounded-3xl" style={{"background": "rgba(26, 44, 44, 0.6) no-repeat padding-box"}} >


      <span className='sm:text-xl md:text-2xl lg:text-3xl text-zinc-500 m-auto' style={{'@media (maxWidth: 390px)': {fontSize: '2xl'}}}>Employee Dashboard</span>

      </div>
      </div>
      <div  className='px-16 mt-16  justify-center items-center'>
      <div className=" p-2 flex justify-between mb-1">
        <span className=" md:text-2xl sm:text-xs lg:3xl text-base font-medium text-white">Productivity on Monday</span>
        <span className=" md:text-2xl sm:text-xl lg:3xl font-medium text-white">4%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <div className="bg-green-600 h-3.5 rounded-full" style={{ width: '4%' }}></div>
      </div>
      </div>
      <div  className='px-16 mt-16 justify-center items-center'>
      <div className=" p-2 flex justify-between mb-1">
        <span className=" md:text-2xl sm:text-xs lg:3xl text-base font-medium text-white">Productivity on Tuesday</span>
        <span className="  md:text-2xl sm:text-xl lg:3xl font-medium text-white">92%</span>
      </div>
      <div className="w-full  bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <div className="bg-green-600 h-3.5 rounded-full" style={{ width: '52%' }}></div>
      </div>
      </div>
      
      <div  className='px-16 mt-16  justify-center items-center'>
      <div className=" p-2 flex justify-between mb-1">
        <span className=" md:text-2xl sm:text-xs lg:3xl text-base font-medium text-white">Productivity on Wednesday</span>
        <span className=" md:text-2xl sm:text-xl lg:3xl text-sm font-medium text-white">122%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <div className="bg-green-600 h-3.5 rounded-full" style={{ width: '88%' }}></div>
      </div>
      </div>

      <div  className='px-16 mt-16  justify-center items-center'>
      <div className=" p-2 flex justify-between mb-1">
        <span className=" md:text-2xl sm:text-xs lg:3xl text-base font-medium text-white">Productivity on Thursday</span>
        <span className=" md:text-2xl sm:text-xl lg:3xl  font-medium text-white">93%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <div className="bg-green-600 h-3.5 rounded-full" style={{ width: '69%' }}></div>
      </div>
      </div>

      <div  className='px-16 mt-16  justify-center items-center'>
      <div className=" p-2 flex justify-between mb-1">
        <span className=" md:text-2xl sm:text-xs lg:3xl text-base font-medium text-white">Productivity on Friday</span>
        <span className="md:text-2xl sm:text-xl lg:3xl font-medium text-white">89%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <div className="bg-green-600 h-3.5 rounded-full" style={{ width: '75%' }}></div>
      </div>
      </div>

      <div  className='px-16 mt-16   justify-center items-center'>
      <div className=" p-2 flex justify-between mb-1">
        <span className=" md:text-2xl sm:text-xs lg:3xl text-base font-medium text-white">Productivity on Saturday</span>
        <span className="  md:text-2xl sm:text-xl lg:3xl  font-medium text-white">98%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <div className="bg-green-600 h-3.5 rounded-full" style={{ width: '78%' }}></div>
      </div>
      </div>
    </div>
  )
}
