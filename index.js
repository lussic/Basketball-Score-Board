let homeEl = document.getElementById("home-score");
let homeBtn1 = document.getElementById("home-plus1")
let homeBtn2 = document.getElementById("home-plus2")
let homeBtn3 = document.getElementById("home-plus3")
let homeTotal = 0

function plusOne(){
    homeTotal += 1
    homeEl.innerText = homeTotal
}

function plusTwo(){
    homeTotal += 2
    homeEl.innerText = homeTotal
}

function plusThree(){
    homeTotal += 3
    homeEl.innerText = homeTotal
}

let guestEl = document.getElementById("guest-score");
let guestBtn1 = document.getElementById("guest-plus1")
let guestBtn2 = document.getElementById("guest-plus2")
let guestBtn3 = document.getElementById("guest-plus3")
let guestTotal = 0

function guestPlusOne(){
    guestTotal += 1
    guestEl.innerText = guestTotal
}

function guestPlusTwo(){
    guestTotal += 2
    guestEl.innerText = guestTotal
}

function guestPlusThree(){
    guestTotal += 3
    guestEl.innerText = guestTotal
}

let resetEl = document.getElementById("reset")

function reset(){
    homeTotal -= homeTotal
    homeEl.innerText = homeTotal
    guestTotal -= guestTotal
    guestEl.innerText = guestTotal
}