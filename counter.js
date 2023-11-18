const addBtn = document.querySelector('.btnA')
const subBtn = document.querySelector('.btnB')
const output = document.querySelector('h3')
const resetBtn = document.querySelector('.btnReset')
// output.textContent = "GOODMORNING"
let counter = 0
addBtn.addEventListener('click', ()=>{
    output.textContent = counter++
})
subBtn.addEventListener('click',()=>{
    output.textContent = counter--
})
resetBtn.addEventListener('click',()=>{
    counter = 0
    output.textContent = "0"
    // counter = output.textContent
})