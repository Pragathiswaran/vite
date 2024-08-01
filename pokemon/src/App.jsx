import React from 'react'

export default function App() {
  const pokemon  = new Promise((resolve,reject)=>{
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(
      res=>{
        if(!res.ok){
          throw new Error(`Not found ${res.statusText}`)
        }
        return res.json()
      }
    ).then(data=>resolve(data))
    .catch(err=>reject(err))
  })

  pokemon.then((data)=>{
    console.log(data)
  }
  ).catch((data)=>{
    console.log(data)
  })
  
  return (
    <div>App</div>
  )
}
