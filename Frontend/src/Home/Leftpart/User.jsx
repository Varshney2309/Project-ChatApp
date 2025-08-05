import React from 'react'

function User() {
  return (
    <div>
        <div className='flex space-x-4 px-8 py-3 hover:bg-slate-800 duration-300 mt-2'>
            <div className="avatar avatar-online">
                <div className="w-12 rounded-full">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
                </div>
            </div>
            <div>
                <h1 className='font-bold text-white'>Varshney</h1>
                <span>varshney@dev.com</span>
            </div>  
       </div>
    </div>
  )
}

export default User