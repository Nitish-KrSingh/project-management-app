import React from 'react'
import noprojectImage from "../assets/no-projects.png";
import Button from './Button'
export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className=' py-16 mt-25 text-center w-2/3'>
      <img src={noprojectImage} alt="Empty task list" className='w-16 h-16 mx-auto object-contain' />
        <h2 className='text-xl font-bold text-stone-500 my-4 '>No project Selected</h2>
      <p className='text-stone-400 mb-4'>Select a project or get Started with a new one</p>
      <p>
        <Button onClick={onStartAddProject}>Create a new Project</Button>
      </p>
    </div>
  )
}
