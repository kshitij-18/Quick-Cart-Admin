import React from 'react'

const LoginLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div className='h-screen w-screen bg-gradient-to-l from-cyan-500 to-blue-500'>{children}</div>
  )
}

export default LoginLayout