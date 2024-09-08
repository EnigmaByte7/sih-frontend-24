import React from 'react'
import bgimage from "/src/assets/pulsar-page-background.jpg"
import bgwebp from "/src/assets/pulsar-page-background.webp"
import pulsarimage from "/src/assets/pulsar.png"

import "/src/index.css";
import "/src/assets/fonts/Poppins/Poppins-Regular.ttf";
import graph1 from "/src/assets/graph-1.png";
import graph2 from "/src/assets/graph-2.png";
import graph3 from "/src/assets/graph-3.png";
import ResearchNavbar from '../../../components/ResearchNavbar';


function pulsar() {
  
    const about = "/projects/pulsar/about";
    const classify = '/projects/pulsar/classify';
    const discuss = '/projects/pulsar/discuss';
    const collection = '/projects/pulsar/collection';
  return (
    
    <>
    
    <div className='bg-black'>
      
        

    </div>
    
    <div className="Project-homepage flex flex-col">
    
        <div className="project-page-background relative inline-block m-0 p-0">
            <picture>
              <source srcSet={bgwebp} type='image/webp'/>
              <img className="w-screen h-screen " src={bgimage} loading='lazy' alt="background-pulsar-page" />
            </picture>
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-auto">
            <ResearchNavbar 
                about={about}
                classify={classify}
                discuss={discuss}
                collection={collection}/>
            </div>
            <div className=" w-1/4 px-5 text-2xl font-semibold top-20 left-40 text-white bg-transparent absolute bg-opacity-50">
              Join the Search for Pulsars:Help Einstein@Home scientists to identify these amazing cosmic lighthouses!
              <br />
              
              <br />
              <p className='text-sm font-thin '> Pulsars are the cosmic lighthouses of the universe, emitting beams of radiation that sweep across space with incredible precision. These fascinating celestial objects hold the keys to understanding the fundamental laws of physics, the nature of matter, and the dynamics of our universe. By studying pulsars, you are not just exploring distant stars; you are pushing the boundaries of human knowledge and contributing to groundbreaking discoveries.</p>
              <br />
              <button className='hover:bg-teal-500 hover:text-white align-center font-light text-lg text-md left-1/4  text-white bg-sky-899 absolute border-4 border-teal-500 rounded-3xl px-6 py-3 '>Learn More</button>
              
              
            </div>
            <div className=" w-1/2 mx-8  text-4xl font-semibold top-40 right-0 m text-white bg-transparent absolute bg-opacity-50">
            <img className="rounded-full w-4/5 h-4/5  border-10 border-white-700 shadow-3xl" loading="lazy" src={pulsarimage} alt="" />
            </div>

            
            
        </div>
        <br />
        <div className="project-workflow w-screen shadow-lg shadow-black-500/50 m-0 p-0">
          <div className="workflow-page-content px-40 py-10 bg-pink-900 ">
            <h3 className='font-bold text-white text-lg'>Get started </h3>
            <br />
            <p className='text-white text-md' >Pulsar Seekers offers two distinct workflows to engage volunteers. The first is the Training Mode, designed to educate and train new volunteers in classifying pulsar candidates. Once you feel confident and ready, you can transition from training mode into Expert Mode by coming back to the main page and clicking on to the "Expert mode" button, where your task involves providing concise yes or no responses.</p>
            <br />
            <div className="buttons-page flex py-10">
            <button className='hover:bg-teal-500 hover:text-white text-md font-semibold text-white bg-pink-800 border-4 border-white-500 rounded-lg px-4 py-3' href="">Training Mode</button>
            <button className='hover:bg-teal-500 hover:text-white text-md font-semibold text-white bg-pink-800 border-4 border-white-500 rounded-lg px-4 py-3 mx-5' href="">Expert Mode</button>
            </div>
          </div>
          <br />
          <div className="project-page-container w-screen h-full flex mx-2 px-10">
          
            <a className='m-2 w-[50vw] '>
            <div className="img-1  w-fit h-[60vh] ">
              <img className="object-cover w-full h-full border-4 rounded-lg border-sky-600" src={graph1} alt="" />
            </div>
            </a>
            <a className='m-2 w-[50vw] '>
            <div className="img-1  h-[60vh] ">
              <img className="object-cover w-full  h-full border-4 rounded-lg border-sky-600" src={graph2} alt="" />
            </div>
            </a>
            <a className='m-2 w-[50vw] '>
            <div className="img-1  h-[60vh] ">
              <img className="object-cover w-full  h-full border-4 rounded-lg border-sky-600" src={graph3} alt="" />
            </div>
            </a>
            <div className="live-views w-6/12">
              <button className='relative top-1/2 left-1/2 hover:bg-teal-500 hover:text-white text-md font-semibold text-white bg-pink-900 border-4 border-black rounded-lg px-4 py-3  self-center' href="">Join in</button>
            </div>
          </div>
          <br />
          
        </div>
        <br />
        <br />
        <div className="flex h-screen">
          <div className="w-1/4 px-4 bg-gray-500 shadow-xl mx-4 my-6 py-5 h-fit items-center rounded-xl justify-center text-white">
          <h4 className='mb-2 font-semibold text-lg text-white'>What do experts say?</h4>
          <p>
          Experts believe that the study of pulsars is essential for understanding the extreme physics of the universe. Pulsars, rapidly rotating neutron stars, provide unique laboratories for testing fundamental theories of physics, such as general relativity and quantum mechanics. By studying their properties, scientists can gain insights into the formation and evolution of neutron stars, the nature of matter under extreme conditions, and the existence of gravitational waves.
          </p>
          </div>
          <div className="w-1/2 h-fit bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-black px-10 py-10  rounded-xl">
          Pulsars: Cosmic Clocks and Extreme Physics
          <br />
          Pulsars are rapidly rotating neutron stars that emit beams of electromagnetic radiation. They are formed when massive stars collapse at the end of their lives, leaving behind incredibly dense cores. Pulsars are known for their incredibly regular pulses of radiation, which can be detected from Earth.
          <br />

          Key characteristics of pulsars include:
          <br />

          High density: Pulsars are among the densest objects in the universe.
          Strong magnetic fields: Pulsars have incredibly strong magnetic fields.
          Rapid rotation: Pulsars spin incredibly quickly.
          Electromagnetic radiation: Pulsars emit a wide range of electromagnetic radiation.
          The study of pulsars has provided valuable insights into:
          <br />

          The physics of extreme conditions: Pulsars offer a unique laboratory for studying matter under conditions that cannot be replicated on Earth.
          The evolution of neutron stars: By studying pulsars, astronomers can learn about the processes that occur in the cores of massive stars and the formation of neutron stars.
          Gravitational waves: Pulsars have been used to detect gravitational waves, ripples in spacetime caused by massive cosmic events.
          <br />
          The nature of dark matter: Pulsars can be used to search for dark matter, a mysterious substance that makes up most of the matter in the universe.
          <br />
          Pulsars are a fascinating and important area of astronomical research, providing valuable insights into the nature of the universe.
          </div>
          <div className="w-1/4 flex items-center justify-center">
          <ul>
            <li className='hover:text-lg'><a href="">External Links</a></li>
            <li className='hover:text-lg'><a href="">More Info</a></li>
          </ul>
          </div>
        </div>
        
        


      
    </div>
    </>
  )
}

export default pulsar
