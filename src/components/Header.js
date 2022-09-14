import React from 'react'

export default function Header({ title, navigate }) {
  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <header className='w-full h-20 grid place-items-center mb-10'>
      <h1 className='text-center text-3xl font-bold tracking-tight text-white mb-2'>
        {title}
      </h1>

      <button className='text-white font-medium' onClick={handleLogout}>
        Log out
      </button>
    </header>
  )
}
