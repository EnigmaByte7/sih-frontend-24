import React, { useEffect, useState } from 'react'
import ResearchNavbar from '/src/components/ResearchNavbar.jsx';
import QuestionsById from '../../../components/QuestionsById';
import ImageRenderer from '../../../components/ImageRenderer';
// import image from "/src/assets/graphpulsar.png"

function classify() {
  const [imageSet,setImageSet] = useState([]);
  const [error, setError] = useState(null); // Add error state
  const [loading, setLoading] = useState(true); 

  const projectId="66dbeb32566bfd63224b0d60"
    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          // API request
          const apiResponse = await fetch(`https://backend-1v0u.onrender.com/form/projects/${projectId}`);
          
          if (!apiResponse.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await apiResponse.json();
          // console.log('Fetched Data:', data); // Debugging line to check full response
  
          // Assuming the API returns data with an ImageSet array
          if (data && data.ImageSet) {
            // console.log("ImageSet found:", data.ImageSet); // Check if ImageSet exists
            setImageSet(data.ImageSet);
          } else {
            console.warn("No ImageSet found in the response data.");
          }
  
          setLoading(false);
        } catch (err) {
          // console.error('Error fetching data:', err);
          setError('Failed to load images.');
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);



    const imageUrl = "/src/assets/graphpulsar.png";
    const about = "/projects/pulsar/about";
    const classify = '/projects/pulsar/classify';
    const discuss = '/projects/pulsar/discuss';
    const collection = '/projects/pulsar/collection';
  return (
    <div className='min-h-[100vh] min-w-screen'>
      {/* Message for smaller screens */}
      <div className="block md:hidden text-center p-4 bg-red-200 text-red-800 border border-red-300 rounded">
        <p>Please use a laptop or desktop for the best experience on this page.</p>
      </div>
      <div className="hidden md:block">
      <ResearchNavbar 
                about={about}
                classify={classify}
                discuss={discuss}
                collection={collection}/>
      
      
      <div className='flex'>

      <div className="w-[60vw] ml-[6vw] h-[100vh] ">
        <ImageRenderer imageSet={imageSet} />
      </div>
      
      <div className="w-[30vw]  bg-[#1E1E1E] h-[100vh] p-10 rounded-lg border-1 border-gray-400 mb-20">
      
        <div className='buttons flex justify-center items-center'>
          <button type="button" className="text-white bg-sky-500 m-2 py-2 px-4 rounded-lg hover:bg-zinc-800">Task</button>
          <button type="button" className="text-white bg-sky-500 m-2 py-2 px-4 rounded-lg hover:bg-zinc-800">Tutorial</button>
         
        </div>
        <div className='text-white'>
        <br />
        <QuestionsById projectId="66dbeb32566bfd63224b0d60"/>
        </div>
        <p ></p>

      </div>
      </div>
      </div>
    </div>
  )
}

export default classify;
