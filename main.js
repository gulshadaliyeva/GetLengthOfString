"use striet"
let input = document.querySelector("input")
let btn = document.querySelector("button")
let div =document.querySelector("#lenght")
btn.onclick = function(){
    if (input.value.trim().includes(" ")) {
        div.innerHTML = input.value.trim().split(" ").length + " soz"
    } else {
        div.innerHTML = input.value.trim().length + " herf"
    }
}
