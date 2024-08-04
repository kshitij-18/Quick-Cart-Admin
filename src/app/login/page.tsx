import { auth, signIn } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const LoginPage = async () => {
  const session = await auth()
  if (session?.user) {
    redirect('/home');
  }
  return (
    <div className='flex h-full w-full justify-center items-center'>
      <div className='flex flex-col gap-4 items-center'>
        <h1 className='text-cyan-50 text-5xl font-extrabold'>Login to the Quick Cart Admin Portal</h1>
        <form action={async () => {
          "use server"
          await signIn('google');
          redirect('/home')
        }}>
          <button type='submit' className='rounded-sm bg-red-400 hover:bg-red-600 delay-100 shadow-md py-2 px-4 text-white'>
            Login With Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage