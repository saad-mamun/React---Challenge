import React from 'react'

const Hero = ({title="Become a React Developer", subtitle="This is subtitle"}) => {
  return (
    <div>
      <div className='text-center text-white bg-indigo-700 py-20'>
        <h1 className='text-4xl font-bold' >{title}</h1>
        <h1 className='text-2xl'>{subtitle}</h1>
      </div>
    </div>
  )
}

export default Hero
