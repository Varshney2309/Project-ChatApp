import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
      <div className='h-[10vh]'>
        <form action="">
        <div className='flex space-x-3 px-6 py-4 mt-2'>
        <label className="border-[1px] border-gray-700 rounded-3xl p-3 bg-slate-900 flex items-center gap-2 w-[80%] ">
  
        <input type="search" className="grow bg-slate-900 text-white focus:outline-none" placeholder="Search" />
        {/* <kbd className="kbd kbd-sm">Ctrl</kbd>
        <kbd className="kbd kbd-sm">K</kbd> */}
        </label>
        <button>
            <FaSearch className='text-4xl p-2 hover:bg-gray-600 rounded-full duration-300' />
        </button>
        </div>
        </form>
        
    </div>
    </div>
  )
}

export default Search