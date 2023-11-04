const btn = document.querySelector('#myBtn');
const spoiler = document.querySelector('#spoiler');

btn.addEventListener('click', openSpoiler);


function openSpoiler(){
   spoiler.classList.toggle('closed');
   // console.log(spoiler.classList.value);
   if(spoiler.classList.value !=='closed'){
      document.addEventListener('keydown', handleEscape);
   }
}

function handleEscape(event){
   // console.log(event.key);
   let c = event.key;
   if(c ==='Escape'){
      // console.log('55555');
      closeSpoilerEscape();
   }
};

function closeSpoilerEscape(){
   // console.log('123')
   spoiler.classList.add('closed');
   document.removeEventListener('keydown', handleEscape);
}