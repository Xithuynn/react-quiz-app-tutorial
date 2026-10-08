import { useEffect, useState } from 'react'
import './App.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const quizData = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Which language is used to style web pages?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    correctAnswer: "CSS"
  },
  {
    id: 3,
    question: "Which React hook is used to manage state?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useRef"
    ],
    correctAnswer: "useState"
  }
];



function App() {
      const [currentQuestion,setCurrentQuestion] = useState(0)
      const[selectedAnswer,SetSelectedAnswer] = useState(null)
      const[isAnswered, setIsAnswered] =useState(false)
      const question = quizData[currentQuestion]
      const [isFinished, setIsFinished] = useState(true)

      useEffect(()=>{
        
        
      })

       function handleClick(option) {

          if(isAnswered) return;
          setIsAnswered(!isAnswered)
           SetSelectedAnswer(option)
           if(question.answer == selectedAnswer) console.log("correct")
            else console.log("incorrect")
          console.log(isAnswered)
         }

        const previousQuestion = () => {
            setCurrentQuestion((prev) => prev-1 )
            console.log(currentQuestion)
        }
         const nextQuestion = () => {
            if(currentQuestion === quizData.length -1 ) {
              setIsFinished(!isFinished)
              return
            }
                ;
            setCurrentQuestion((prev) => prev+1 )
            console.log(currentQuestion , quizData.length)
        }
  return (
    
       <div className='min-h-screen bg-blue-500 flex justify-center items-center  '>  
                  
            <div className='w-3/4 h-120 bg-white p-10 rounded-2xl  overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2)] flex flex-col  relative '>
                 <button 
                      className='left-1 arrow-btn'
                      onClick={()=>previousQuestion}> 
                      <ArrowBackIcon/>    
                  </button>
                    <button className={` ${isFinished? "arrow-btn right-1 opacity-100" : "opacity-0"}`}
        
                            onClick={ nextQuestion}
                    >
                       <ArrowForwardIcon/> 
                    </button>
               
                <div>
                    <h3>မေးခွန်းများ</h3>
                </div>
                <div className ="question-box scrollbar-hover">
                    <p className='para-format'> {question.question} </p>
                </div>

                <div className='btn-box'>
                    {
                        question.options.map((option)=>(
                            <button className={`transition duration-300 ${selectedAnswer === option? "btn-clicked" :isAnswered? "btn-answered": "btn-primary"}`} 
                                    key={option} 
                                    onClick={()=>{handleClick(option)}}
                                    disabled={isAnswered}
                                    >
                                {option}
                            </button>
                        ))
                    }
                </div>
            </div>
            
       </div>
      
   
  )
}

export default App
