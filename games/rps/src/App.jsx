import { useState,useEffect } from 'react';
import './App.css';

function App() {

  const rockpaperScissor = {
    1:'rock',
    2:'paper',
    3:'scissor'
  }
  const [game, setGame] = useState({ rock: 0, paper: 0, scissor: 0 });
  
  return (
    <>
      <div className='flex justify-center mt-40 gap-4'>
        <button className='border border-black p-10' onClick={()=>setGame((prev) => ({...prev, rock: true }))}>rock</button>
        <button className='border border-black p-10' onClick={()=>setGame((prev) => ({...prev, paper: true }))}>paper</button>
        <button className='border border-black p-10' onClick={()=>setGame((prev) => ({...prev, scissor: true }))}>scissors</button>
      </div>
    </>
  );
}

export default App;
