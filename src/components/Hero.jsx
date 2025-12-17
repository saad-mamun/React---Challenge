import React from 'react'

const Hero = ({title="this is title", subtitle="this is subtitle"}) => {
  return (
    <div>
      <div className='text-center'>
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
      </div>
    </div>
  )
}

export default Hero
