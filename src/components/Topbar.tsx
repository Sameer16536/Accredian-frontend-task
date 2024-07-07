import React from 'react'

const Topbar = () => {
  return (
    <div className='bg-cyan-200 py-2 px-4'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center'>
        <div className='text-center sm:text-left mb-2 sm:mb-0'>
          Navigate your ideal career path with tailored expert advice
        </div>
        <div className='text-blue-500 hover:text-blue-700 cursor-pointer'>
          Contact Expert
        </div>
      </div>
    </div>
  )
}

export default Topbar