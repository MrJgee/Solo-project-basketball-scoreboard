
// code to change the Home score
let homeScoreEl= document.getElementById("home-score");
let homeScore = 0;

console.log(homeScoreEl)

function plusOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function plusTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function plusThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function resetHome (){
    homeScore = 0
    homeScoreEl.textContent = homeScore
}
// End of code to change the home score
//Code to change the guest section

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0;

function plusOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function plusTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function plusThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetGuest (){
    guestScore = 0
    guestScoreEl.textContent = guestScore
}
