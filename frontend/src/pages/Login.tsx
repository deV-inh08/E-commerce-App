import React, { ReactElement, useState } from 'react'

const Login: React.FC = () => {

  const [currentState, setCurrentState] = useState<string>("Sing-up");

  // handle FormEvent
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
  event.preventDefault();

  };
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-2-96 m-auto mt-14 gap-4 text-gray-800' action="">
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === "Login" 
        ?<>
          <input required type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' />
          <input required type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
        </>
        :<>
          <input required type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' />
          <input required type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' />
          <input required type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
        </>
      }
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password ?</p>
        {
          currentState === "Login" 
          ? <p onClick={() => setCurrentState("Sign-up")}  className='cursor-pointer'>Create Account</p>
          : <p onClick={() => setCurrentState("Login")}  className='cursor-pointer'>Login here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === "Login" ? "Sign-In": "Sign-up"}</button>
    </form>
  )
}

export default Login
