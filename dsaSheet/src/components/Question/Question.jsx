import React, { useState } from 'react';
import './question.css';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

function Question({ item, idx, handleChange }) {
  const [isCompleted, setIsCompleted] = useState(item.completed);

  const changeStatus = (e) => {
    const newValue = e.target.value;
    setIsCompleted(newValue);
    handleChange(newValue, idx);
  };

  return (
    <div className='madimi-one-regular w-full h-16 text-black flex flex-wrap justify-between mt-2'>
      <div className='w-16 ml-1'>{item.topic}</div>
      <a href={item.url} target='_blank' className='w-96 hover:text-green-700'  >
        <div style={{
  color: isCompleted === 'Yes' ? 'black' : 'black'
}}
>{item.questions}</div>
      </a>
      <div className='w-16 mr-3'>{item.level}</div>
      <div className='w-16'>{item.day}</div>

      <div className='flex gap-2'>
        <select
          className='w-16 h-8 text-black ml-1 bg-red-300 p-1 rounded-md'
          id="dropdown"
          value={isCompleted}
          onChange={changeStatus}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        
        <div className='mt-1 h-[25px] w-[25px]'>
        {isCompleted === 'Yes' ? (
            <IoCheckmarkDoneCircleOutline size={'25px'} color={'white'}  />
          ) : null
          }
        </div>
      </div>
    </div>
  );
}

export default Question;
