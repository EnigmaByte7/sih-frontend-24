import React, { useEffect, useState } from 'react';
import Loading from "/src/assets/Loading.gif"

function Talk() {
  const [talks, setTalks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTalk, setNewTalk] = useState('');

  // Fetch existing talks
  useEffect(() => {
    const fetchTalks = async () => {
      try {
        const response = await fetch('https://backend-1v0u.onrender.com/form/talks');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const filteredData = data.data.filter(talk => talk !== null);
        setTalks(filteredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTalks();
  }, []);

  // Handle form submission
  const handleSubmit = async () => {
    if (!newTalk.trim()) {
        alert('Please write something before posting!');
        return;
      }

    try {
      const response = await fetch('https://backend-1v0u.onrender.com/form/submit/talks', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ text: newTalk }),
      });

      if (!response.ok) {
        throw new Error('Failed to post');
      }

      setTalks((prevTalks) => [...prevTalks, newTalk]);
      setNewTalk('');
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div><img src={Loading} className='w-screen h-screen absolute' alt="...loading" /></div>
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='text-white m-5 h-screen'>
      <h1 className='text-3xl m-2 font-bold'>Talks</h1>
      <div className='flex-1'>
        <h4 className='mt-4 mb-2 text-lg font-medium text-gray-200'>Create a Post</h4>
        <textarea
          className='bg-zinc-800 w-2/5 resize-none overflow-y-auto p-2 rounded-md border-1'
          style={{ height: '120px', scrollbarWidth: 'thin', scrollbarColor: '#27272a' }}
          name='text'
          value={newTalk}
          onChange={(e) => setNewTalk(e.target.value)}
        ></textarea>
        <br />
        <button
          onClick={handleSubmit}
          className='py-2 px-4 bg-purple-800 text-semibold text-md rounded-lg mt-2 hover:bg-zinc-700 hover:border-2 hover:text-white'
        >
          Post
        </button>
        <div className='mt-5 mb-5 '>
            <h4 className='text-xl font-bold'>Posts</h4>
        <div className='hide-scrollbar space-y-2 w-[96vw] overflow-y-auto max-h-[450px]'>
            <ul >
            {talks.length > 0 ? (
                talks.map((text, index) => (
                <li key={index} className='bg-zinc-700 m-10  w-[90vw] h-[20vh] rounded-md '>
                    <h4 className='bg-gray-100 text-zinc-800 py-3 rounded-md px-2'>@username</h4>
                    <p className='p-2 m-2'>{text}</p>
                </li>
                ))
            ) : (
                <li>No talks available.</li>
            )}
            </ul>
            </div>
      </div>
      </div>
    </div>
  );
}

export default Talk;
