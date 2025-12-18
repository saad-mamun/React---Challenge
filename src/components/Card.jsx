import React from 'react'

const Card = ({ children ,bg="bg-gray-100" }) => {
  return (
    <div className={`${bg} ' p-6 rounded-lg shadow-md'`}>
      {/* Card export korar por Card er moddhe jai rakhben sob  children hobe*/}
      {children}
    </div>
  );
}

export default Card
