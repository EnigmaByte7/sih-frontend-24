import React, { useState,useEffect } from 'react'
import Loading from "/src/assets/Loading.gif"

function ExpandedView() {

const [loading, setLoading] = useState(true); // 'true' instead of "true"
const [error, setError] = useState(null);
const [imageSet, setImageSet] = useState([]);
const [name, setName] = useState(null); // Declare name state
const [fetchedData, setFetchedData] = useState(null); // Declare fetchedData state
const projectId = "66dbeb32566bfd63224b0d60";
const [currentPage, setCurrentPage] = useState(1); // Track the current page
const imagesPerPage = 20; // 4 columns x 5 rows = 20 images per page
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API request
        const apiResponse = await fetch(
          `https://backend-1v0u.onrender.com/form/projects/${projectId}`
        );

        if (!apiResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await apiResponse.json();
        // console.log("Fetched Data:", data); // Debugging line

        // console.log('Fetched Data:', data); // Debugging line to check full response
        if(data){
          setFetchedData(data)
        }
        if(data.project_name){
          setName(data.project_name);
        } else{
          console.warn("No name found ")
        }

        // Assuming the API returns data with an ImageSet array
        if (data.ImageSet) {
        //   console.log("ImageSet found:", data.ImageSet); // Check if ImageSet exists
          setImageSet(data.ImageSet);
        } else {
          console.warn("No ImageSet found");
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err); // Debugging line
        // console.error('Error fetching data:', err);
        setError("Failed to load images.");
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  if (loading) return <div><img src={Loading} className='w-screen h-screen absolute' alt="...loading" /></div>
  if(error) return <div>Error: {error}</div>;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageSet.slice(indexOfFirstImage, indexOfLastImage);

  // Function to go to the next page
  const handleNextPage = () => {
    if (indexOfLastImage < imageSet.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Function to go to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  return (
    <div className='h-[100vh] w-[100vw]  overflow-x-hidden mb-2'>
      <h1 className='text-2xl text-white font-bold m-5'>
        All The Images 
      </h1>
      <h2 className='text-xl text-white font-semibold m-5'>{name}</h2>
      <ul className="grid grid-cols-4  overflow-y-scroll grid-rows-5 w-[97vw] grid-rows-fit w-fit mb-3 opacity-90  mt-4  mr-4 ml-4 border-1 border-white rounded-md p-2" >
              {currentImages.map((image,index)=>(
                <li key={index} className="m-0.5 w-fit" >
                <img
                  loading="lazy"
                  src={image.image_url} 
                  alt={`Pulsar ${index + 1}`} 
                  className="w-[28vw] h-[50vh]"
                />
              </li>
              
              ))}
              
            </ul>
            {/* Pagination Controls */}
            <div className="flex justify-between mb-10">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className=" ml-10 mt-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={indexOfLastImage >= imageSet.length}
                className=" mr-10 mt-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Next
              </button>
            </div>
    </div>
            
    
  );
}

export default ExpandedView
