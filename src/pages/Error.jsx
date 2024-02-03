import React from 'react'

const Error = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center transition-all duration-200'>
      <h1 className='bg-gradient-to-r from-green-400 to-cyan-400 inline-block text-transparent bg-clip-text font-black text-9xl'>404</h1>
      <h2 className='text-white text-2xl font-bold'>Not Found</h2>
    </div>
  )
}

export default Error