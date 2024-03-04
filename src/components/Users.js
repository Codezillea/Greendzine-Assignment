import React, { useEffect, useState,useRef } from 'react';

import { Informations } from './Informations';


export const Users = () => {
    const [userList, setUserList] = useState([]);
    const [search , setSearch] =useState("");
    
    const searchRef = useRef();
    useEffect ( ()=>{
      window.scrollTo(0,0);
  },[])
   
    function handleSearch(event)
    {
        event.preventDefault();
        setSearch(searchRef.current.value);

    }

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch(`${process.env.REACT_APP_HOST}/employee_details`);
            const data = await response.json();
            setUserList(data)

        }
        fetchUsers();
      
    }, []) //eslint disable
    return (
        <>
       
       <div className="relative p-12 mt-12 md:block">
       <form onSubmit={handleSearch}>
    <div className="relative">
      <input
        ref={searchRef}
        type="text"
        id="search-navbar"
        className="block text-bold rounded-full w-full h-14 p-2 pl-5 sm:text-xl md:text-2xl lg:text-3xl text-white bg-zinc-900 placeholder-white placeholder-font-bold sm:placeholder-text-xs pr-12 sm:pr-3"
        placeholder="Search with name"
        style={{ textAlign: 'center', lineHeight: '20px' }}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className=" w-5 h-5 font-bold  text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"

        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
    </div>
  </form>

  <div className='flex flex-wrap justify-center lg:flex-row max-w-7xl mx-auto'>
    {userList.filter((item) => {
      return search === '' ? item : item.name.includes(search)
    }).map((user) => (
      <Informations key={user.id} user={user} />
    ))}
  </div>
</div>

        </>
    )
}
