import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGamepad, faUser, faBell, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookMessenger, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {

    const location = useLocation(); 
    const [activeTab, setActiveTab] = useState();

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

  return (
    <>
      <div className="w-full bg-white-0 shadow-md px-1 fixed top-0 z-50">
        <div className="px-4 dark:border-neutral-700">
          <nav className="flex gap-x-2 justify-between" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <div className='flex items-center w-1/4'>
              <FontAwesomeIcon icon={faFacebook} className="text-3xl text-blue-600 pr-2" />
              <div className="max-w-34">
                <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-300 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 focus:outline-none" placeholder="This is placeholder" />
              </div>
            </div>
          <div className='w-1/2 flex justify-center'>
            {NavIcons.map((tab, index) => {
             const tabIndex = index + 1;
              return (
                <Link to={tab.routes} key={tabIndex} className='hs-tooltip'>
                  <button type="button"
                    className={`hs-tooltip-toggle py-4 px-10 inline-flex items-center gap-x-2 border-b-[3px] text-xl whitespace-nowrap focus:outline-none rounded-t-lg
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