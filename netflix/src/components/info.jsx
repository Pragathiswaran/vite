import React from "react";

const Info = ({selectComponent}) => {
    const infoContent = [
        ['FAQ','Investor Relations','Privacy','Speed Test'],
        ['Help Center','Job','Cookie preferences','Legal Notice'],
        ['Account','Way to Watch','Corporate Information','Only on Netflix'],
        ['Media Centre','Terms of us','Contact us']
    ]
    return(
        <div className='text-zinc-400 mt-2 bg-black py-12 flex flex-col text-md underline px-44 '>
        <div className='pb-6'>Questions? Call <span>000-800-919-1694</span></div>
        <div className='flex justify-between pb-6 w-4/5'>
            {infoContent.map((item,index)=>(
                <div key={index}>
                {item.map((subItem,index)=>(
                    <div key={index} className='pb-3'>{subItem}</div>
                ))}
                </div>
            ))}
        </div>
        <div className='w-1/4 pb-6'>
          <selectComponent />
        </div>
        <div>
          Netflix India
        </div>
      </div>
    )
}

export default Info;