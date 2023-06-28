import Lottie from "lottie-react";
import errors from "../../../public/error.json"
import { Link } from 'react-router-dom'

        const Error = () => {
    return (
        <div className="h-screen flex flex-col gap-0 justify-center items-center ">
            <div className='h-2/3'>
                <Lottie className='w-full h-full' animationData={errors} loop={true}></Lottie>
            </div>
            <Link to='/' className='p-3 text-white rounded-lg font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 '>
                Go Back To Homepage
            </Link>
        </div>
    );
    
};

export default Error;