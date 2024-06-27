import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
const getStartForm = () => {
    return(
        <>
        <form className='mt-4 flex flex-col items-center'>
            <div className='mb-4'>
                <p className='text-white mt-6 text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className='flex w-full gap-2 justify-center'>
                <input type="text" 
                    placeholder="Email address" 
                    className='h-14 w-1/4 pl-3 bg-netflix-black border border-gray-700 text-white focus:outline-none focus:border-gray-500'
                />
                <button className='bg-red-700 text-white text-2xl font-semibold w-52 flex justify-center pt-2'>
                    <span>
                        Get Started
                    </span>
                    <span>
                    <ChevronRightIcon fontSize='large' className='font-medium'/>
                    </span>
                </button>
            </div>
        </form>
        </>
    )
}

export default getStartForm;