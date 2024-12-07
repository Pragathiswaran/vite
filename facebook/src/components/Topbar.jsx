import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGamepad, faUser, faBell, faGripVertical, faMagnifyingGlass,faArrowLeft  } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookMessenger, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {

    const location = useLocation(); 
    const [activeTab, setActiveTab] = useState();
    // const [Focus, setFocus] = useState(true);

    const NavIcons = [
      { icon: faHome,routes: '/home',title:"Home"},
      { icon: faYoutube,routes: '/videos',title:"Videos"},
      { icon: faUser,routes: '/groups',title:"Groups"},
      { icon: faGamepad,routes: '/games',title:"Games"},
      // { navs : [faGripVertical, faFacebookMessenger, faBell, faUser]}
    ]

    useEffect(() => {
      const currentIndex = NavIcons.findIndex( tab => tab.routes === location.pathname) + 1;
      setActiveTab(currentIndex);
    },[location.pathname])

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
      {/* <div className="relative"> */}
  {/* First div (Input container) */}
  <div className="absolute top-3 max-w-sm space-y-3 z-10">
    <div>
      <input
        type="text"
        className={`${
          container ? "placeholder:translate-x-0" : "placeholder:translate-x-6"
        } placeholder:transition-all placeholder:duration-300 py-2.5 px-4 inline-flex justify-start w-60
          bg-gray-100 border-transparent rounded-full text-sm outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-200 dark:border-transparent dark:text-neutral-500 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
        placeholder="Search Facebook"
        onFocus={handleFocus}
      />
      <div
        className={`${
          container ? "opacity-0" : "opacity-100"
        } transition-all duration-400 ease-in absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none`}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-neutral-500" />
      </div>
    </div>
  </div>

  {/* Second div (Dropdown or additional container) */}
  <div
    tabIndex={-1}
    className={`w-[330px] absolute top-[-7.5px] left-[-19.5px] mt-2 px-4 pt-0.5 pb-4 rounded-md bg-white shadow-md ${ container ? "block" : "hidden"} z-0`}
    onBlur={handleBlur}
  >
    <div className="px-0 pt-3 flex justify-start">
      <button
        className={`bg-gray-200 p-2.5 outline-none rounded-full items-center justify-center text-md ${
          container ? "inline-flex" : "hidden"
        }`}
        onClick={handleBlur}
      >
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
{/* </div> */}

    </>
  )
  }

  const checkHandler = () => {
   alert('hello')
  }

  return (
    <>
      <div className="w-full bg-white-0 shadow-md px-1 fixed top-0 z-50">
        <div className="px-4 dark:border-neutral-700">
          <nav className="flex gap-x-2 justify-between" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <div className='relative flex gap-3 items-center w-1/4'>
              <div className='' onClick={checkHandler} >
                <FontAwesomeIcon icon={faFacebook} className="text-4xl text-blue-600" />
              </div>
              <div >
                  <SearchBar />
              </div>
            </div>
          <div className='w-1/2 flex justify-center'>
            {NavIcons.map((tab, index) => {
             const tabIndex = index + 1;
              return (
                <Link to={tab.routes} key={tabIndex} className='hs-tooltip'>
                  <button type="button"
                    className={`hs-tooltip-toggle py-4 max-sm:hidden sm:px-3 md:block md:px-6 lg:px-12 inline-flex items-center gap-x-2 border-b-[3px] text-xl whitespace-nowrap focus:outline-none rounded-t-lg
                    ${
                      activeTab === tabIndex
                        ? 'hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 dark:text-neutral-400 hover:bg-gray-10'
                    }`}
                    id={`basic-tabs-item-${tabIndex}`} aria-selected={activeTab === tabIndex} data-hs-tab={`#basic-tabs-${tabIndex}`}
                    aria-controls={`basic-tabs-${tabIndex}`} role="tab"onClick={() => setActiveTab(tabIndex)}>
                      <FontAwesomeIcon icon={tab.icon} />
                      <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible text-sm z-10 py-1 px-2 bg-gray-800 text-white rounded-md" role="tooltip">
                        {tab.title}
                      </span>
                  </button>
                </Link>
            )})}
          </div>
          <div className='w-1/4 flex justify-end items-center gap-x-2'>
           {[faGripVertical, faFacebookMessenger, faBell, faUser].map((tab, index) => (
              <button type="button" className="flex shrink-0 justify-center items-center gap-2 size-[46px] text-xl font-medium rounded-full border border-transparent bg-gray-20 text-black hover:bg-gray-300 focus:outline-none active:bg-gray-400 disabled:opacity-50 disabled:pointer-events-none" key={index}>
                  <FontAwesomeIcon icon={tab} />
              </button>
           ))}
          </div>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Topbar