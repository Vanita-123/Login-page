const container = document.querySelector('.container')
const next_button =document.querySelector('.next-btn')
const arrow_btn = document.querySelector('.arrow-btn')
const email_input= document.querySelector('.first input')
const email_el = document.querySelector('.email')
next_button.addEventListener('click', ()=>{
    container.classList.add('next-form')
    email_el.innerText = email_input.value
    document.querySelector('.bottom').style.display ='none'
})
arrow_btn.addEventListener("click", ()=>{
    container.classList.remove('next-form')
    document.querySelector('.bottom').style.display ="flex"
})

