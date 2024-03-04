import React, { useEffect, useState } from 'react';
import Logo from "../assets/moptro logo.png";
import caller from "../assets/Group 46.png";
import { Footer } from "../components/Footer";
import { Users } from '../components/Users';
import { Productivity } from "../components/Productivity";

export const Dashboard = () => {
  const [ employee , setEmployee ]= useState([])
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/employee_details`);
        if (!response.ok) {
          throw new Error('Failed to fetch employee details');
        }
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
        // Handle error gracefully, e.g., display a message to the user
      }
    }
    fetchUsers();
  
}, []) //eslint-disable

  const [dashboard, setDashboard] = useState(true);

  return (
    <div className='bg-black'>
      <div className='relative h-0 pb-2/3 sm:pt-1/3 lg:pt-2/3 m-6 flex justify-end'>
        <img className="cursor-pointer object-cover absolute sm:w-15 sm:h-15 w-30 h-30" src={caller} alt="" />
      </div>
      <div className='flex flex-col m-4 justify-center items-center'>
        <div style={{ position: 'relative' }}>
          <img className="cursor-pointer mt-16 " src={Logo} alt="" />
          <span className=' absolute mt-16  top-0 right-0 transform translate-x-1/2 -translate-y-1/2 border-white rounded-full w-8 h-8 text-center bg-zinc-900 text-green-500'>
            <p className='text-center py-1'>{employee.length}</p> {/* Replace 5 with your actual product count */}
          </span>
        </div>
      </div>
      {dashboard && <Productivity />}
      {!dashboard && <Users />}
      <Footer setDashboard={setDashboard} />
    </div>
  );
};
