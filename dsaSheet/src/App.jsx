
import './App.css'
import Background from './components/Background/Background.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Foreground from './components/Foreground/Foreground.jsx'
import TopicList from './components/Topic/TopicList.jsx'






function App() {
  

  return (
      <div className='w-[100vw] h-[100vh] flex justify-center relative'>
        {/* <Background/> */}
        <Navbar/>
        <Foreground/>
        
        
        
      </div>
  )
}


export default App
