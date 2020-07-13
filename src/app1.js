import './app1.css'
import $ from 'jquery'

const $number = $("#number")
const n = localStorage.getItem("n")
$number.text(n || 100)

$('#add1').on('click', ()=>{
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem("n", n)
    $number.text(n)
})
$('#minus1').on('click', ()=>{
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem("n", n)
    $number.text(n)
})
$('#mul2').on('click', ()=>{
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem("n", n)
    $number.text(n)
})
$('#divide2').on('click', ()=>{
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem("n", n)
    $number.text(n)
})
