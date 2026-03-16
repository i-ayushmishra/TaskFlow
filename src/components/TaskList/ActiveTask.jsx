import React from 'react'

const ActiveTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full p-4 sm:p-5 w-[260px] sm:w-[300px] bg-red-400 rounded-xl'>
            
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-xs sm:text-sm px-3 py-1 rounded'>
                    {data.category}
                </h3>
                <h4 className='text-xs sm:text-sm'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold'>
                {data.taskTitle}
            </h2>

            <p className='text-xs sm:text-sm mt-2'>
                {data.taskDescription}
            </p>

            <div className='flex justify-between gap-2 mt-5 sm:mt-6'>
                <button className='bg-green-500 py-1 px-2 text-xs sm:text-sm rounded'>
                    Mark as Completed
                </button>
                <button className='bg-red-500 py-1 px-2 text-xs sm:text-sm rounded'>
                    Mark as Failed
                </button>
            </div>

        </div>
    )
}

export default ActiveTask