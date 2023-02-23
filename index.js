let guestScoreEl = document.getElementById("guest-score-el")
let homeScoreEl = document.getElementById("home-score-el")

let guestScore = 0
let homeScore = 0

function displayGuestScore() {
    guestScoreEl.textContent = guestScore.toString().padStart(3, "0")
}

function displayHomeScore() {
    homeScoreEl.textContent = homeScore.toString().padStart(3, "0")
}

function guestAdd(score) {
    let result = guestScore + score
    if (result < 1000) {
        guestScore = result
        displayGuestScore()
    }
}

function homeAdd(score) {
    let result = homeScore + score
    if (result < 1000) {
        homeScore = result
        displayHomeScore()
    }
}

function reset() {
    guestScore = 0
    homeScore = 0
    displayGuestScore()
    displayHomeScore()
}
