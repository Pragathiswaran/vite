import {React, useState, useRef} from 'react'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import GetStartForm from './components/subcomponents/getStartForm';
import Select from './components/subcomponents/select';
import FaqQuestion from './components/faqQuestion'
import Info from './components/info'

function App() {

  return (
    <>
      <div id="background-container">
        <div className='relative flex justify-between pt-6 px-32'>
          <div className='w-36'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
          </div>
          <div className='w-72 flex justify-around'>
            <Select />
            <button className='bg-red-600 text-white w-1/4 rounded h-8 text-center'>Signup</button>
          </div>
        </div>
        <div className='relative block text-white text-center mt-44'>
          <p className='text-5xl font-black'>Unlimited movies, TV shows, and more</p>
          <p className='text-2xl mt-6'>Watch anywhere. Cancel anytime.</p>
        </div>
        <div className='relative'>
          <GetStartForm />
        </div>
        {/* <GetStartForm /> */}
      </div> 
      <div className='relative mt-2 w-full bg-black flex justify-evenly items-center pb-20'>
        <div className='text-white'>
          <p className='text-5xl font-extrabold mb-6'>Enjoy in your TV</p>
          <p className='text-2xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast,</p>
          <p className='text-2xl'>Apple TV, Blu-ray players and more</p>
        </div>
        <div>
          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'/>
        </div>
      </div>
      <div className='realtive mt-2 w-full bg-black flex justify-evenly items-center py-20'>
        <div>
          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'/>
        </div>
        <div className='text-white'>
          <p className='text-5xl font-extrabold mb-2'>Download your shows</p>
          <p className='text-5xl font-extrabold mb-5'>To Watch offline</p>
          <p className='text-2xl'>save your favourites easily and always have something</p>
          <p className='text-2xl'>to watch</p>
        </div>
      </div>
      <div className='mt-2 relative bg-black w-full flex justify-evenly items-center py-20'>
      <div className='text-white'>
          <p className='text-5xl font-extrabold mb-5'>Watch everywhere</p>
          <p className='text-2xl'>Stream unlimited movies and TV shows on</p>
          <p className='text-2xl'>your phone, tablet, laptop, and TV.</p>
        </div>
        <div>
          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png'/>
        </div>
      </div>
      <div className='relative w-full bg-black flex justify-evenly items-center py-20 mt-2 px-12'>
        <div>
          <img src='https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d'/>
        </div>
        <div className='text-white'>
          <p className='text-5xl font-extrabold mb-4'>Create profiles for kids</p>
          <p className='text-1xl'>send children on adventures with thier favourite</p>
          <p className='text-1xl'>characters in space made just for them--free with</p>
          <p className='text-1xl'>your membership</p>
        </div>
      </div>
      <div className='relative w-full bg-black text-white mt-2 py-20 flex flex-col items-center'>
        <div className='text-5xl font-serif font-extrabold pb-12'>
          <h1>Frequently Asked Questions</h1>
        </div>
          < FaqQuestion />
        <div className='w-full'>
          <GetStartForm />
        </div>
      </div>
      <Info selectComponent={<Select />} />
    </>
  )
}

export default App
