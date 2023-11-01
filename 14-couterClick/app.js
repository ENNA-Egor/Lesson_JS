const btns = document.querySelectorAll('button');

btns.forEach(btn =>btn.addEventListener('click', handleEvent));

function handleEvent(e){
    let count = e.target.getAttribute("data-clicked");
    e.target.setAttribute("data-clicked", ++count);
    
    
    // const btn1 = document.querySelector('#clicker1');
    // const btn2 = document.querySelector('#clicker2');
    
    // let count1 = btn1.getAttribute("data-clicked");
    // let count2 = btn2.getAttribute("data-clicked");
    
    // console.log (count1);
    // console.log (count2);
};