const btn = document.querySelector('.on-off-checkbox')
const body = document.querySelector('.body')


btn.onclick = function(){
  body.classList.toggle("active")
}