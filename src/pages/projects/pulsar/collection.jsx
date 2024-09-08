import React,{useEffect,useState} from "react";
import ResearchNavbar from "/src/components/ResearchNavbar.jsx";
import Loading from "/src/assets/Loading.gif"

function collection() {
  const about = "/projects/pulsar/about";
  const classify = "/projects/pulsar/classify";
  const discuss = "/projects/pulsar/discuss";
  const collection = "/projects/pulsar/collection";

  const [imageSet, setImageSet] = useState([]);
  const [name, setName] = useState(null);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null); // Add error state
  const [loading, setLoading] = useState(true);

  const projectId = "66dbeb32566bfd63224b0d60";
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
          console.log("ImageSet found:", data.ImageSet); // Check if ImageSet exists
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
  if(error)return <div>Error: {error}</div>;

  const limitedImageSet = imageSet.slice(0, 10);

  const handleExpandClick=()=>{
    const url ="/projects/pulsar/expanded-view"
    window.open(url,"_blank")
  }

  return (
    <>
      <ResearchNavbar
        about={about}
        classify={classify}
        discuss={discuss}
        collection={collection}
      />

      <div className="collection">
        <h1 className="m-5 text-2xl font-bold justify-center text-[#F5F5F5] ml-[vw] mr-[8vw] mt-[10vh] mb-[10vh]">
          Collections
        </h1>
        <div className="container w-fit ml-[4vw] bg-zinc-900 px-0 h-[60vh] mb-4 rounded-lg ">
          {imageSet.length >0 ? (
            <>
            <h3 className="grid grid-cols-2 text-xl bg-gray-50 text-black font-medium py-4 px-4 rounded-lg shadow-lg">
            {name} <button className=" text-white w-fit ml-[20vw] bg-zinc-900 hover:bg-zinc-700 px-2 py-1 rounded-lg" onClick={handleExpandClick}>Expand</button>
            </h3>
            <ul className="grid grid-cols-5 grid-rows-fit w-fit mb-2 opacity-90  mt-4 mb-5 mr-4 ml-4 border-1 border-white rounded-md p-2" >
              {limitedImageSet.map((image,index)=>(
                <li key={index} className="m-0.5 w-fit" >
                <img
                  loading="lazy"
                  src={image.image_url} 
                  alt={`Pulsar ${index + 1}`} 
                  className="w-[10vw] h-[20vh]"
                />
              </li>
              
              ))}
              
            </ul>
            
            
            </>
          ):(
            <div>No Data Found for this project</div>
          )}
        </div>
      </div>
    </>
  );
}

export default collection;
