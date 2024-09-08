import React from 'react'
import research from "/src/assets/Research.png"
function Footer() {
  return (
    <div className=' bottom-0 w-screen h-fit flex bg-black text-gray-400'>
      <div className='flex w-screen gap-10 my-10 '>
        <img src={research} className="w-[8vw] h-fit p-2 mr-15 ml-5" alt="Logo image" />
        <nav className='flex gap-20  '>
            <ul>
                <li>Projects</li>
                <li>Collections</li>
                <li>Build a Project</li>
                <li>How to Build</li>
                <li>Project Policies</li>
                <li>FAQ</li>
            </ul>
            <ul>
                <li>About Us</li>
                <li>Education</li>
                <li>Our Team</li>
                <li>Publications</li>
                <li>Acknowledgements</li>
                <li>Contact Us</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Footer
