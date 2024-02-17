import React, { Children } from 'react'

export default function Button({children , ...props}) {
  return (
   
        <button className='px-4 py-2 md:text-xs rounded-md bg-indigo-700 text-indigo-300 hover:bg-indigo-600 hover:text-indigo-100' {...props} >
                {children}
            </button>
   
  )
}
