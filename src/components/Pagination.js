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
    <div className='pagination'>
      <span className='page-position'>
        Showing page <span className='page'>{currentPage}</span> of{' '}
        <span className='page'>{pagination}</span> Pages
      </span>
      <div className='page-navigation'>
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
