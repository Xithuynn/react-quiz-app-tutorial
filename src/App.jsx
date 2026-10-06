import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    
       <div className='min-h-screen bg-blue-500 flex justify-center items-center '>  
            <div className='w-3/4 h-120 bg-white p-10 rounded-2xl  overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2)] flex flex-col'>
                <div>
                    <h3>မေးခွန်းများ</h3>
                </div>
                <div className ="question-box scrollbar-hover">
                    <p className='para-format'>  lor sit amet consectetur adipisicing elit. Nulla quia officia esse est eveniet delectus dolores ipsa amet quae beatae voluptatem, laboriosam cum reiciendis, sequi provident nihil! Po Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione earum excepturi voluptate beatae sequi voluptatibus nulla atque quas dolor, libero, culpa rem reiciendis nam laboriosam alias inventore vel, cupiditate recusandae. rro, et illum. </p>
                </div>

                <div className='btn-box'>
                        <button className='btn-primary'>Answer 1</button>
                        <button className='btn-primary'>Answer 1</button>
                        <button className='btn-primary'>Answer 1</button>
                        <button className='btn-primary'>Answer 1</button>
                        
                </div>
            </div>
            
       </div>
      
   
  )
}

export default App
