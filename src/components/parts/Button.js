import React from 'react'

export default function Button({
  title,
  onClick,
  loading,
  disabled,
  className,
}) {
  if (loading) {
    return (
      <button
        type='submit'
        className='text-white cursor-not-allowed bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
        onClick={onClick}
        disabled>
        Loading...
      </button>
    )
  }
  if (disabled) {
    return (
      <button
        type='submit'
        className='text-white cursor-not-allowed bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
        onClick={onClick}
        disabled>
        {title}
      </button>
    )
  }

  return (
    <button
      type='submit'
      className={`${className} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
      onClick={onClick}>
      {title}
    </button>
  )
}
