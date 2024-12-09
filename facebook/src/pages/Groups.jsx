import React,{useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faArrowLeft  } from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => {
  const [container, setContainer] = React.useState(false)

const handleFocus = () => {setContainer(true)}
const handleBlur = (e) => {
   if (!e.currentTarget.contains(e.relatedTarget)) {
    setContainer(false);
  }
}
return (
  <>
    <div className="relative">
      <div className="absolute max-w-sm space-y-3 z-50">
        <div className="relative">
          <input type="text" className={`${container ? "placeholder:translate-x-0" : "placeholder:translate-x-6"} placeholder:transition-all placeholder:duration-300 py-2.5 px-4 inline-flex justify-start w-60
              bg-gray-100 border-transparent rounded-full text-sm outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-200 dark:border-transparent dark:text-neutral-500 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
            placeholder="Search Facebook" onFocus={handleFocus}/>
          <div className={`${ container ? "opacity-0" : "opacity-100" } transition-all duration-400 ease-in absolute inset-y-0 start-0 
              flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-neutral-500" />
          </div>
        </div>
      </div>
      <div tabIndex={-1} onBlur={handleBlur} className={`w-[330px] absolute top-[-15px] left-[-60px] mt-2 px-4 pt-0.5 pb-4 rounded-md bg-white 
          shadow-md ${ container ? "block" : "hidden"} z-0`}>
        <div className="px-0 pt-1.5 flex justify-start">
          <button className={`bg-gray-200 p-2.5 outline-none rounded-full items-center justify-center text-md 
              ${container ? "inline-flex" : "hidden"}`} onClick={handleBlur}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        {container && (
          <div className={`flex flex-col mt-2 pt-4 px-4`}>
            <div>hello world hello world hello world hello world hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
            <div>hello world</div>
          </div>
        )}
      </div>
    </div>
    </>
)}


const Groups = () => {
  return (
    <>
      {/* <div className='relative grid grid-cols-[1fr,3fr] mt-14'>
        <div></div>
        <div></div>
      </div> */}

      <div className='flex items-center mt-32 mx-52'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-neutral-500" />
      <SearchBar />
      </div>
    </>
  )
}

export default Groups