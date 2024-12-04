import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faClockRotateLeft, faBookmark, faHouse, faRadio, faChartColumn, faHeart, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'


const NavbarLeft = () => {

    const icons = [
        {
            id:1,
            icon:faUser,
            title:'username'
        },
        {
            id:2,
            icon:faUsers,
            title:'Freinds'
        },
        {
            id:3,
            icon:faClockRotateLeft,
            title:'Memories'
        },
        {
            id:4,
            icon:faBookmark,
            title:'Saved'
        },
        {
            id:5,
            icon:faUsers,
            title:'Groups'
        },
        {
            id:6,
            icon:faYoutube,
            title:'username'
        },
        {
            id:7,
            icon:faHouse,
            title:'Marketplace'
        },
        {
            id:8,
            icon:faRadio,
            title:'feeds'
        },
        {
            id:9,
            icon:faCalendar,
            title:'Events'
        },
        {
            id:10,
            icon:faChartColumn,
            title:'Ads Managers'
        },
        {
            id:11,
            icon:faHeart,
            title:'Fundraisers'
        },
        {
            id:12,
            icon:faAngleDown,
            title:'see some'
        },
    ]
  return (
    <>
    <div className='w-[340px] h-screen overflow-y-hidden scrollbar-smooth scrollbar-thumb-rounded-lg scrollbar-hide scrollbar-thumb-gray-400 scrollbar-track-none hover:overflow-y-auto hover:scrollbar-thin'>
        <nav className='flex flex-col justify-start ml-2 my-3'>
            { icons.map((items) => (
                <>
                <ul className='w-full p-3 hover:bg-gray-200 rounded-l-lg mt-1' key={items.id}>
                    <div className='inline-block text-lg '>
                    <FontAwesomeIcon icon={items.icon} />
                    <span className='ml-2 font-semibold'>{items.title}</span>
                    </div>
                </ul>
            </>
            ))}
            <footer className="text-gray-500 mt-3 text-[14px] mb-14 max-w-1/3">
                Privacy . Terms . Advertising . Ad Choices . Cookies . More . Facebook © 2021
            </footer>
        </nav>
    </div>
    
    </>
  )
}

export default NavbarLeft