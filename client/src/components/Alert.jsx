import React from 'react'

export const Alert = ({msg}) => {
  return (
    <div className='text-danger text-center fw-bold fs-5 my-3'>
      {msg}
    </div>
  )
}
