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
          className='w-full border-2 rounded-md py-2 px-3 focus:box-sh'/>
          {searchTerm.length > 0 && (
          <ul className='absolute bg-white w-72 border-2 rounded-md mt-1 max-h-40 overflow-y-auto'>
            {searchTerm.map((item, index) => (
              <li key={index} className='px-2 py-1 cursor-pointer' onClick={() => getOptions(item)}> {item} </li>
            ))}
          </ul>
          )}
      </div>
    </>
  )
}

export default SearchBar