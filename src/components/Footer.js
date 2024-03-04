import React from 'react'

export const Footer = ({setDashboard}) => {

    
    return (
        <div>


            <footer className="rounded-3xl shadow m-4" style={{"background": "transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box"}}>
                <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center  ">
                    <div className=" justify-between">
                    <span onClick={()=>setDashboard(true)} className='cursor-pointer'><i className=" m-8 text-4xl text-green-800 bi bi-house-door-fill"></i></span>
                    <span  onClick={()=>setDashboard(false)} className='cursor-pointer' ><i className=" m-8 text-4xl  text-green-800 bi bi-person-fill"></i></span>
                    </div>
                   
                </div>
            </footer>

        </div>
    )
}
