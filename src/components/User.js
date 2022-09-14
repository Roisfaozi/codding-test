import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function User({ user }) {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col divide-y w-full mb-3 rounded-lg shadow bg-white hover:bg-gray-50'>
      <div className='flex flex-row'>
        <div
          className='select-none cursor-pointer  flex flex-1 items-center p-4'
          onClick={() => {
            navigate(`/users/${user.id}`)
          }}>
          <div className='flex flex-col w-10 h-10 justify-center items-center mr-4'>
            <img
              alt={`${user.first_name} ${user.last_name}`}
              src={user.avatar}
              className='mx-auto object-cover rounded-full h-10 w-10'
            />
          </div>
          <div className='flex-1 pl-1'>
            <div className='font-medium '>
              {user.first_name} {user.last_name}
            </div>
            <div className='text-gray-600  text-sm'>{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
