import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/parts/Button'
import axios from '../configs/axios'
export default function Login() {
  const [error, setError] = useState({ email: '', password: '' })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  let history = useNavigate()

  const onChangeEmail = (e) => {
    const value = e.target.value
    setEmail(value)
    setError({ ...error, email: '' })
  }
  const onChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    setError({ ...error, password: '' })
  }

  const submitLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      email: email,
      password: password,
    }

    await axios
      .post('/login', data)
      .then((result) => {
        if (result) {
          localStorage.setItem('token', result.data.token)
        }
      })
      .then(() => {
        history('/users')
        setEmail('')
        setPassword('')
      })
      .catch((err) => {
        if (err.response.data.error === 'Missing password') {
          setError({ ...error, password: err.response.data.error })
        } else {
          setError({ ...error, email: err.response.data.error })
        }
      })
    setLoading(false)
  }
  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 '>
        <div className='w-full max-w-lg space-y-8 bg-white shadow-lg rounded-lg p-6'>
          <div>
            <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 '>
              Sign in to your account
            </h2>
          </div>

          <form>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 '>
                Your email
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border-gray-300 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='name@email.com'
                value={email}
                onChange={onChangeEmail}
              />
              <p className='mt-2 text-sm text-red-600 h-5'>
                {error.email && (
                  <>
                    <span className='font-medium'>Oops!</span> {error.email}
                  </>
                )}
              </p>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 '>
                Your password
              </label>
              <input
                placeholder='Password'
                type='password'
                id='password'
                className='bg-gray-50 border-gray-300 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                value={password}
                onChange={onChangePassword}
              />
              <p className='mt-2 text-sm text-red-600 h-5'>
                {error.password && (
                  <>
                    <span className='font-medium'>Oops!</span> {error.password}
                  </>
                )}
              </p>
            </div>

            <Button
              className=' text-white bg-blue-700 hover:bg-blue-800'
              onClick={submitLogin}
              loading={loading}
              title='Login'
            />
          </form>
        </div>
      </div>
    </>
  )
}
