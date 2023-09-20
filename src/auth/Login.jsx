import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Contextpage from '../Contextpage';

function Login() {
    
    const {GoogleLogin} = useContext(Contextpage);

    return (
        <div className="h-screen flex justify-center items-center">
            <div className='border-2 border-white/30 p-5 flex justify-center items-center gap-5 rounded-2xl cursor-pointer hover:bg-black'>
                <FcGoogle className='text-3xl' />
                <a class="1tLWwW"><h1 className='text-white font-semibold'>Continue to Access</h1></a>
            </div>
        </div>
    )
}

export default Login