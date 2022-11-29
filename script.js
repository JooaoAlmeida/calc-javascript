let first = []
let second = []
let result

const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const num4 = document.querySelector('#num4')
const num5 = document.querySelector('#num5')
const num6 = document.querySelector('#num6')
const num7 = document.querySelector('#num7')
const num8 = document.querySelector('#num8')
const num9 = document.querySelector('#num9')
const num0 = document.querySelector('#num0')
const dot = document.querySelector('#dot')


num1.addEventListener('click',function(){first.push(1)})
num2.addEventListener('click',function(){first.push(2)})
num3.addEventListener('click',function(){first.push(3)})
num4.addEventListener('click',function(){first.push(4)})
num5.addEventListener('click',function(){first.push(5)})
num6.addEventListener('click',function(){first.push(6)})
num7.addEventListener('click',function(){first.push(7)})
num8.addEventListener('click',function(){first.push(8)})
num9.addEventListener('click',function(){first.push(9)})
num0.addEventListener('click',function(){first.push(0)})
dot.addEventListener('click',function(){first.push('.')})



console.log(first)
