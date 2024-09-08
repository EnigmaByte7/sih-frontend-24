import React,{useEffect,useState} from 'react'

const QuestionsById=({projectId}) =>{
      // data fetching 
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [fetchedQuestions,setFetchedQuestions]=useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [reload, setReload] = useState(false); // Added state to trigger re-fetch
  // const [imageSet,setImageSet]=useState(null);


  useEffect(()=>{
    const fetchQuestionsById  = async()=>{
      setLoading(true); // Start loading when fetching data
      try {
        const response = await fetch(`https://backend-1v0u.onrender.com/form/projects/${projectId}`);
        const data = await response.json();
        

        if (data.questions){
          setFetchedQuestions(data.questions);
          setCurrentQuestionIndex(0); // Reset to first question
          setSelectedOptionIndex(null); // Reset selected option
        }
        // if(data.ImageSet){
        //   setImageSet(data.ImageSet);

        // }
        

      } catch (error) {
        setError(error.message);
        setLoading(false)
      } finally {
        setLoading(false);
      }
    };
    fetchQuestionsById();

  },[projectId, reload]);

  useEffect(() => {
    // Reset selectedOptionIndex when navigating to a new question
    if (currentQuestionIndex === 0) {
      setSelectedOptionIndex(null);
    }
  }, [currentQuestionIndex]);


  const handleNextQuestion = () => {
    if (currentQuestionIndex < fetchedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
    }
  };

  
  const handleOptionClick=(index)=>{
    setSelectedOptionIndex(index);
  };
  const handleSubmit = () => {
    alert('Response submitted!');
    setReload(!reload);
  };


  const currentQuestion = fetchedQuestions[currentQuestionIndex];



  if(loading) return <div>loading....</div>;
  if(error)return <div>Error: {error}</div>;

    

  return (
    <>
    <div className="w-[20vw] ml-[5vw] flex h-[40vh] absolute left-0">
    {/* {renderImages()} */}
    </div>
    <div className='h-[80vh] rounded-lg w-[25vw]'>
      {/* <h1>Questions for project : {fetchedQuestions.project_name}</h1> */}
      {fetchedQuestions.length>0 ? (
            <>
            <h1 className='py-4 rounded-lg border-1 px-4 capitalize text-md font-semibold'>{currentQuestion.question+" ?"}</h1>
            <h2 className='capitalize mt-5 mb-4 text-xl font-semibold'>Options:</h2>
            <ul>
              {currentQuestion.option.map((opt, index) => (
                <li key={index}
                className={`m-3 py-3 rounded text-center cursor-pointer ${
                  selectedOptionIndex === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-zinc-700 hover:bg-zinc-800'
                }`}
                onClick={() => handleOptionClick(index)}
                >
                  {opt}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              {currentQuestionIndex < fetchedQuestions.length - 1 ? (
                <button className="border-1 py-2 px-4 rounded-lg hover:bg-sky-500" onClick={handleNextQuestion}>
                  Next Question
                </button>
              ) : (
                <button className="border-1 py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 text-white" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </>
          ) : (
            <div>No questions found for this project</div>
          )}
        </div>
      </>
      );
    };

export default QuestionsById
