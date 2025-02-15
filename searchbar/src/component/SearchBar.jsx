import React, { useState }from 'react'

const SearchBar = () => {

  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState([])
  const options = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 
      'lemon', 'mango', 'orange', 'pear', 'quince', 'raspberry', 'strawberry', 
      'tangerine', 'watermelon']
      
  const inputHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
    if(value === ''){ 
      setSearchTerm([])
    } else {
      const filteredOptions = options.filter(option => option.toLowerCase().includes(value))
      setSearchTerm(filteredOptions)  
    }
  }

  const getOptions = (option) => {
    setInput(option)
    setSearchTerm([])
  }

  return (
    <>
      <div className='w-72 relative'>
          <input type="text" placeholder="Search..." onChange={inputHandler} value={input}
          className='w-full rounded-md py-2 px-3 outline-0 transition-all ring-1 focus:ring-blue-500 focus:ring-2'/>
          {searchTerm.length > 0 && (
            <ul className='absolute bg-white w-72 border-2 rounded-md mt-1 max-h-40 overflow-y-auto scroll-smooth'>
              {searchTerm.map((item, index) => (
                <li key={index} className='px-2 py-1 cursor-pointer hover:bg-gray-100 focus:bg-gray-200' onClick={() => getOptions(item)}> {item} </li>
              ))}
            </ul>
          )}
      </div>
    </>
  )
}

export default SearchBar