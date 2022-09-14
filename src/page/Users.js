import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import User from '../components/User'
import axios from '../configs/axios'

export default function Users() {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState(Number)

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    getUsers(currentPage)
  }, [currentPage])

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [])

  const getUsers = async (page) => {
    await axios.get(`users?page=${page}`).then((response) => {
      setUsers(response.data.data)
      setPagination(response.data.total_pages)
    })
  }
  return (
    <>
      <Header title='Users List' navigate={navigate} />
      <div className='flex flex-col container max-w-lg mt-10 mx-auto w-full items-center justify-center'>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}

        <Pagination
          currentPage={currentPage}
          pagination={pagination}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}
