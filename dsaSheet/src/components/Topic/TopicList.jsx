import React from 'react'
import './style.css'

function TopicList({listNo}) {
  return (
    <ul className='madimi-one-regular w-full h-32 text-white flex flex-wrap gap-2 justify-start items-center text-[0.9rem] tracking-wide mt-1 mb-4 rounded-md bg-[#898121] p-4'>
        <li >Array</li>
        <li>String</li>
        <li>Searching & sorting</li>
        <li>LinkedList</li>
        <li>Stack</li>
        <li>Queue</li>
        <li>Tree</li>
        <li>BST</li>
        <li>Heaps</li>
        <li>Greedy</li>
        <li>Backtracking</li>
        <li>Hashing</li>
        <li>Graphs</li>
        <li>Dp</li>
        <li>Segment Tree</li>
        <li>Trie</li>
        <li>Fenwick Tree</li>
    </ul>
  )
}

export default TopicList