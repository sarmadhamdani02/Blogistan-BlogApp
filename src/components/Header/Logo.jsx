import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='flex items-center justify-center w-10'>
      <img className={`${width}`} src="public/ball-pen-fill.svg" alt="" />
      <h1>Blogistan</h1>
    </div>
  )
}

export default Logo