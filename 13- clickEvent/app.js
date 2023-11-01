// const accordions = document.querySelectorAll(".accordion");

// const collapse = (el) => () => {
//     el.nextElementSibling.classList.toggle('show');
// }

// const color = (el) => () => {
//     el.classList.toggle('active')
// }


// accordions.forEach( accordion => accordion.addEventListener('click', collapse(accordion)))

// accordions.forEach( accordion => accordion.addEventListener('click', color(accordion)))



const els = document.querySelectorAll('.accordion'); ///более адекватный и понятный вариант

for (let item of els) {
    item.onclick = function ()
    {
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('show');
        //alert(item.textContent);
    }
}

