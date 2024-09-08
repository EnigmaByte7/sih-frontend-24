import React from 'react'
import { NavLink } from 'react-router-dom'

function ResearchNavbar(props) {
  return (
    <div className="flex justify-center">
        <nav className='bg-transparent'>
            <ul  className='flex gap-5 bg-black text-white m-2 px-4 py-2 rounded-xl'>
                <li className='hover:bg-white hover:text-black hover:px-2 hover:rounded-lg'><NavLink to={props.about} >ABOUT</NavLink></li>
                <li className='hover:bg-white hover:text-black hover:px-2 hover:rounded-lg'><NavLink to={props.classify}>CLASSIFY</NavLink></li>
                <li className='hover:bg-white hover:text-black hover:px-2 hover:rounded-lg'><NavLink to={props.discuss}>DISCUSS</NavLink></li>
                <li className='hover:bg-white hover:text-black hover:px-2 hover:rounded-lg'><NavLink to={props.collection}>COLLECTIONS</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default ResearchNavbar
