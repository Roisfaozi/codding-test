import React from 'react'
import Button from './parts/Button'

export default function Pagination({
  currentPage,
  pagination,
  setCurrentPage,
}) {
  const handlePrevPage = (e) => {
    e.preventDefault()
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = (e) => {
    e.preventDefault()

    setCurrentPage(currentPage + 1)
  }
  return (
    <div className='flex flex-col items-center border-t border-gray-200'>
      <span className='text-slate-600 text-sm'>
        Showing page{' '}
        <span className='text-slate-900 font-semibold'>{currentPage}</span> of{' '}
        <span className='text-slate-900 font-semibold'>{pagination}</span> Pages
      </span>
      <div className='inline-flex mt-2'>
        <Button
          className='bg-white hover:bg-gray-200 text-gray-900'
          onClick={(e) => handlePrevPage(e)}
          disabled={currentPage === 1 ? true : false}
          title='Prev'
        />
        <Button
          className='bg-white hover:bg-gray-200 text-gray-900'
          onClick={(e) => handleNextPage(e)}
          disabled={currentPage === pagination ? true : false}
          title='Next'
        />
      </div>
    </div>
  )
}
