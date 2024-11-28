import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGamepad, faUser, faBell, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookMessenger, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(1);
    
    const NavIcons = [
      { icon: faHome,routes: '/home'},
      { icon: faYoutube,routes: '/videos'},
      { icon: faUser,routes: '/groups'},
      { icon: faGamepad,routes: '/games'},
      { navs : [faGripVertical, faFacebookMessenger, faBell, faUser]}
  ]
  return (
    <>
      <div className="w-full bg-white-0 shadow-md pt-1 px-1">
        <div className="px-4 dark:border-neutral-700">
          <nav className="flex gap-x-2 justify-between" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <div className='flex items-center w-1/4'>
              <FontAwesomeIcon icon={faFacebook} className="text-3xl text-blue-600 pr-2" />
              <div class="max-w-34">
                <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-300 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 focus:outline-none" placeholder="This is placeholder" />
              </div>
            </div>
          <div className='w-1/2 flex justify-center'>
            {NavIcons.map((tab, index) => {
             const tabIndex = index + 1;
              return (
                <>
                  <Link to={tab.routes} key={tabIndex}>
                    <button key={tabIndex} type="button"
                      className={`py-4 px-10 inline-flex items-center gap-x-2 border-b-2 text-xl whitespace-nowrap focus:outline-none rounded-t-lg
                      ${
                        activeTab === tabIndex
                          ? 'hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-500 dark:text-neutral-400 hover:bg-gray-10'
                      }`}
                      id={`basic-tabs-item-${tabIndex}`} aria-selected={activeTab === tabIndex} data-hs-tab={`#basic-tabs-${tabIndex}`}
                      aria-controls={`basic-tabs-${tabIndex}`} role="tab"onClick={() => setActiveTab(tabIndex)}>
                        <FontAwesomeIcon icon={tab.icon} />
                    </button>
                  </Link>
              </>
            )})}
          </div>
          <div className='w-1/4 flex justify-end items-center gap-x-2'>
           {[faGripVertical, faFacebookMessenger, faBell, faUser].map((tab, index) => (
            <>
                <button type="button" class="flex shrink-0 justify-center items-center gap-2 size-[46px] text-xl font-medium rounded-full border border-transparent bg-gray-20 text-black hover:bg-gray-300 focus:outline-none active:bg-gray-400 disabled:opacity-50 disabled:pointer-events-none" key={index+1}>
                    <FontAwesomeIcon icon={tab} />
                </button>
            </>
           ))}
          </div>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Navbar