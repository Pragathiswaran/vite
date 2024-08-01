// const container = document.querySelector('.container');
// const image = document.querySelector('img');
// var value = false;
// container.addEventListener('click', () => {
//     if(!value){
//         image.style.transform = 'rotate(-45deg)' 
//     }else{
//         image.style.transform = 'rotate(0deg)'
//     }
//     value =!value
// });
// const clickBox = document.querySelector('.click-box')
// const box = document.querySelector('.boxes')

// clickBox.addEventListener('click', () => {
//     box.style.display = "block"
//     // box.style.transform = "translateY(150px)"
//     box.style.transition = "all .5s ease-in"
// })


const pokimon = new Promise ((resolve,reject)=>{
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

pokimon.then((data)=>{
    console.log(data)
}).catch((data)=>{
    console.log(data)
})
