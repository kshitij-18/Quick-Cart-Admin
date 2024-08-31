import { auth, signIn } from '@/auth'
import Image from 'next/image'
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
        }}>
          <button type='submit' className='rounded-sm bg-slate-300 hover:bg-slate-600 delay-100 shadow-md py-2 px-4 text-white flex gap-2'>
            <span>
              <Image src={`/Pictures/google-logo2.png`} alt="" width={25} height={25}/>
            </span>
            Login With Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage