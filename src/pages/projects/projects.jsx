import React from 'react'
import PulsarThumbnail from "/src/assets/pulsar_thumbnail.gif"
import { redirect, useNavigate } from 'react-router-dom';

  

  
function projects() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects/pulsar');
  };
  return (
    <div className='min-h-screen'>
    
<ul  class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
<li onClick={() => window.location.href = '/projects/pulsar'} class="relative flex flex-col sm:flex-row xl:flex-col items-start bg-gray-200 p-4 border-2 border-black rounded-[25px] cursor-pointer hover:bg-gray-400 hover:text-white" >
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">Pulsars</span>Pulsars: Beacons of the Universe
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>Pulsars are rapidly spinning neutron stars that emit beams of electromagnetic radiation, acting like cosmic lighthouses.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Completely unstyled, fully accessible UI components</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <img src={PulsarThumbnail} alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
</ul>
    </div>
  )
}

export default projects
