import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import './style.css';
import TopicList from '../Topic/TopicList';



function Foreground() {
  const [data, setData] = useState([]);
  const [type,setType]=useState("Array");

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/getQuestions');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const res = await response.json();
      setData(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const changeCompleted = (newValue, idx) => {
    const newData = [...data];
    newData[idx].completed = newValue;
    setData(newData);
  };

  useEffect(() => {

    fetchData();
    console.log();
  }, []); 

  return (
  
    <div className="wrapper w-[94%] text-white  absolute top-24">

     <TopicList/> 

     <div className=' rounded-md bg-[#7f8a5b] p-4 m-auto'>
    
      <div className='madimi-one-regular w-full h-12 text-white flex flex-wrap justify-between mt-2 text-[1.1rem] tracking-wide'>
        <div className='w-16 bg-green style'>Topic</div>
        <div className='text-center w-96 style'>Question</div>
        <div className='w-20 style'>Level</div>
        <div className='w-20 style'>Day</div>
        <div className='w-28 style'>Completed</div>
      </div>

      

      {Array.isArray(data) && data
  .filter(item => item.topic === type)
  .map((item, idx) => (
    <Question key={idx} item={item} idx={idx} handleChange={changeCompleted} />
  ))}

    
    </div>


    </div>
   
    
  );
}

export default Foreground;
