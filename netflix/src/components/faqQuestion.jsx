import {React, useState, useRef} from "react";
import AddIcon from '@mui/icons-material/Add';

const FaqQuestion = () => {

    const [clickedIndex,setClickedIndex] = useState(null);
    const addIcon = useRef([]);
    const faqContent = useRef([]);

    const handleClick=(index)=>{
      setClickedIndex(clickedIndex === index ? null :index)
    }

    const FaqContent = [
        {
            id: 1,
            question: 'What is Netflix?',
            answer: `Netflix is a streaming service that offers a wide varity of awad-winnig TV shows,
              movie, anime, documentaries and more - on thousands of internet connected device.

              You can watch as much as you want, whenever you want, without a single commercial - all for one low monthly price.`
        },
        {
            id: 2,
            question: 'What is Netflix?',
            answer: `Netflix is a streaming service that offers a wide varity of awad-winnig TV shows,
              movie, anime, documentaries and more - on thousands of internet connected device.

              You can watch as much as you want, whenever you want, without a single commercial - all for one low monthly price.`
        },
        {
            id: 3,
            question: 'What is Netflix?',
            answer: `Netflix is a streaming service that offers a wide varity of awad-winnig TV shows,
              movie, anime, documentaries and more - on thousands of internet connected device.

              You can watch as much as you want, whenever you want, without a single commercial - all for one low monthly price.`
        },
        {
            id: 4,
            question: 'What is Netflix?',
            answer: `Netflix is a streaming service that offers a wide varity of awad-winnig TV shows,
              movie, anime, documentaries and more - on thousands of internet connected device.

              You can watch as much as you want, whenever you want, without a single commercial - all for one low monthly price.`
        },
        {
          id: 5,
          question: 'What is Netflix?',
          answer: `Netflix is a streaming service that offers a wide varity of awad-winnig TV shows,
            movie, anime, documentaries and more - on thousands of internet connected device.

            You can watch as much as you want, whenever you want, without a single commercial - all for one low monthly price.`
      },
      {
        id: 6,
        question: 'What is Netflix?',
        answer: `Netflix is a streaming service that offers a wide varity of awad-winnig TV shows,
          movie, anime, documentaries and more - on thousands of internet connected device.

          You can watch as much as you want, whenever you want, without a single commercial - all for one low monthly price.`
    },
    ]
    return(
        <>
        {FaqContent.map((item,index)=>(
          <div className='w-3/4' key={index}>
            <div className='mb-4 transition-all'>
            <div className='flex justify-between bg-zinc-800 p-5 text-3xl mb-1 hover:bg-zinc-700' onClick={()=>handleClick(index)}>
              <div>{item.question}</div>
              <div><AddIcon ref={el => addIcon.current[index] = el} className={`transition duration-700 ${clickedIndex === index ? 'rotate-neg-45': ''}`} fontSize='large'/></div>
            </div>
            <div>
              <div className={`w-full bg-zinc-800 p-6 transition-all ${ clickedIndex === index ? 'block' : 'hidden' }`} ref={faqContent}>
                <p className='text-white text-xl'>{item.answer}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
        
        </>
    )
}

export default FaqQuestion;