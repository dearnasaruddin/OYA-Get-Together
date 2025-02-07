// ============ Selecting HTML Element Start ============

// pages
let homePage = document.querySelector("#home")
let partyDetailsPage = document.querySelector("#partyDetails")
let infoPage = document.querySelector("#info")
let choicePage = document.querySelector("#choice")
let paymentPage = document.querySelector("#payment")
let congratulationPage = document.querySelector("#congratulation")

// buttons
let joinBtn = document.querySelector(".joinBtn")
let angleBtn = document.querySelector(".angleBtn")
let nextBtn = document.querySelector(".nextBtn")
let joinAndGiftBtn = document.querySelector(".joinAndGiftBtn")
let giftBtn = document.querySelector(".giftBtn")
let submitBtn = document.querySelector(".submitBtn")

// ============ Selecting HTML Element End ============

joinBtn.addEventListener("click", () => {
    homePage.style.display = "none"
    infoPage.style.display = "none"
    choicePage.style.display = "none"
    paymentPage.style.display = "none"
    congratulationPage.style.display = "none"
    partyDetailsPage.style.display = "block"
})

angleBtn.addEventListener("click", () => {
    homePage.style.display = "none"
    infoPage.style.display = "block"
    choicePage.style.display = "none"
    paymentPage.style.display = "none"
    congratulationPage.style.display = "none"
    partyDetailsPage.style.display = "none"
})

nextBtn.addEventListener("click", () => {
    homePage.style.display = "none"
    infoPage.style.display = "none"
    choicePage.style.display = "block"
    paymentPage.style.display = "none"
    congratulationPage.style.display = "none"
    partyDetailsPage.style.display = "none"
})

joinAndGiftBtn.addEventListener("click", () => {
    homePage.style.display = "none"
    infoPage.style.display = "none"
    choicePage.style.display = "none"
    paymentPage.style.display = "block"
    congratulationPage.style.display = "none"
    partyDetailsPage.style.display = "none"
})
giftBtn.addEventListener("click", () => {
    homePage.style.display = "none"
    infoPage.style.display = "none"
    choicePage.style.display = "none"
    paymentPage.style.display = "block"
    congratulationPage.style.display = "none"
    partyDetailsPage.style.display = "none"
})
submitBtn.addEventListener("click", () => {
    homePage.style.display = "none"
    infoPage.style.display = "none"
    choicePage.style.display = "none"
    paymentPage.style.display = "none"
    congratulationPage.style.display = "block"
    partyDetailsPage.style.display = "none"
})