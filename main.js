
const menu = document.querySelector('.menu')
const wrong = document.querySelector('.wrong')
const nav = document.querySelector('nav')
const btn = document.querySelector('.btn')

menu.addEventListener('click',  () =>{
    nav.classList.add('open-nav')
})
wrong.addEventListener('click',() => {
    nav.classList.remove('open-nav')
})


btn.addEventListener('click', function(){
    alert('Have a great look on our work')
})