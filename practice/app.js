const container = document.querySelector('.container');
const image = document.querySelector('img');
var value = false;
container.addEventListener('click', () => {
    if(!value){
        image.style.transform = 'rotate(-45deg)' 
    }else{
        image.style.transform = 'rotate(0deg)'
    }
    value =!value
});

