let body = document.querySelector('body')
let div  = document.createElement('div')
body.append(div)
const input =document.createElement('input')
div.append(input)
input.setAttribute('id','username')
input.setAttribute('type','text')
input.setAttribute('placeholder','username')
input.classList.add('form-control')
input.classList.add('col-sm-2')
input.classList.add('inp')
