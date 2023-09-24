
import { useState } from 'react';
import './App.css';

function App() {
  const [color, setcolor] = useState("olive")
  return (
   <div className='w-full h-screen duration-200' 
   style={{backgroundColor:color, justifyContent:'center'}}
   >
     <div className=' flex-wrap  bottom-12 insert-x- px-20'>
      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>{setcolor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>{setcolor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>{setcolor("pink")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=>{setcolor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
      </div>
     </div>
   </div>
  );
}

export default App;
