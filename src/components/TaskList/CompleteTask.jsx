import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-4 sm:p-5 w-[260px] sm:w-[300px] bg-blue-400 rounded-xl'>
      
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

      <div className='mt-5 sm:mt-6'>
        <button className='w-full bg-green-500 rounded font-medium py-1 px-2 text-xs sm:text-sm'>
          Complete
        </button>
      </div>

    </div>
  )
}

export default CompleteTask