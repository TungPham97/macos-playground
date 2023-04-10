import React from 'react'
import { BsQuestionSquareFill } from 'react-icons/bs'
import { CgSleep } from "react-icons/cg";
import { RiShutDownLine, RiRestartLine } from "react-icons/ri";

type Props = {}

const Login = (props: Props) => {

  const handleClick = (btn: string): void =>  {

  }

  return (
    <div className='bg-day-background w-screen h-screen bg-center bg-cover'>
      {/* AVATAR */}
      <div className='text-white absolute top-1/3 left-1/2 -translate-x-2/4 flex items-center flex-col'>
        <img className='h-24 w-24 rounded-full' src="/img/ui/avatar.jpg" alt="Avatar" />
        <span className=' font-bold text-lg mt-2 mb-3'>Tung Pham</span>
        <div className='mb-2 flex items-center w-fit py-1 px-2 rounded-md  bg-gray-400'>
          <input className='bg-transparent border-none outline-none placeholder-white' type="password" placeholder='Enter Password' />
          <BsQuestionSquareFill />
        </div>
        <span className='cursor-pointer'>Click to enter</span>
      </div>

      {/* BUTTON */}
      <div className='text-white flex items-center absolute bottom-16 left-1/2 -translate-x-1/2'>
        <div onClick={handleClick('sleep')} className='flex flex-col w-32 cursor-pointer items-center'>
          <div className='h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-400'>
            <CgSleep size={40} />
          </div>
          <span>Sleep</span>
        </div>
        <div onClick={handleClick('restart')} className='flex flex-col w-32 cursor-pointer items-center'>
          <div className='h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-400'>
            <RiRestartLine size={36} />
          </div>
          <span>Restart</span>
        </div>
        <div onClick={handleClick('shutdown')} className='flex flex-col w-32 cursor-pointer items-center'>
          <div className='h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-400'>
            <RiShutDownLine size={36} />
          </div>
          <span>{`Shut Down`}</span>
        </div>
      </div>
    </div>
  )
}

export default Login