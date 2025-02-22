import React, { useRef } from 'react'


// console.log(inputRef)
const PhoneOtp = () => {
  return (
    <form className='flex justify-center items-center gap-x-6' >
        <input type="text" name="" id="" className='otpInput' maxLength={1} inputMode="numeric"/>
        <input type="text" name="" id="" className='otpInput' maxLength={1} inputMode="numeric"/>
        <input type="text" name="" id="" className='otpInput' maxLength={1} inputMode="numeric"/>
        <input type="text" name="" id="" className='otpInput' maxLength={1} inputMode="numeric"/>
    </form>
  )
}

export default PhoneOtp