import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import axios from '../configs/axios'

export default function UserDetail() {
  const [user, setUser] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    getUsers(id)
  }, [])

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [])

  const getUsers = async (id) => {
    await axios
      .get(`users/${id}`)
      .then((response) => {
        setUser(response.data.data)
      })
      .catch((err) => {
        if (err.response.status === 404) navigate('/error')
      })
  }
  return (
    <>
      <Header
        title={`${user.first_name} ${user.last_name}`}
        navigate={navigate}
      />
      <div className='container w-full max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md '>
        <div className='flex flex-col items-center py-10'>
          <img
            className='mb-3 w-24 h-24 rounded-full shadow-lg'
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900 '>
            {' '}
            {user.first_name} {user.last_name}
          </h5>
          <span className='text-sm text-gray-500 '>{user.email}</span>
        </div>
      </div>
    </>
  )
}
