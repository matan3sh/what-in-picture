'use strict'

// Global Variables
var gQuests = createQuests()
var gCurrQuestIdx = 0

// DOM Elements
var elBtn = document.querySelector('button')
var elImage = document.querySelector('img');
var elOptions = document.querySelector('.options');
var elH1 = document.querySelector('h1')
var elModal = document.querySelector('.modal')

function initGame() {
    renderQuest()
}

function clickBtn(elBtn) {
    initGame()
    showElements()
    elBtn.style.display = 'none'
    elH1.innerText = 'What in-picture App'
}

function createQuests() {
    var questions = [
        { id: 1, opts: ['Apple Ltd', 'Microsoft'], correctOptIndex: 1 },
        { id: 2, opts: ['Asus', 'Dell'], correctOptIndex: 2 },
        { id: 3, opts: ['Asus', 'Lenovo'], correctOptIndex: 1 }
    ]
    return questions;
}

function renderQuest() {
    elImage.src = `img/${gCurrQuestIdx + 1}.png`;
    var strHTML = ''
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        strHTML += `<div class="option"
             onclick="checkAnswer(${i + 1})">${gQuests[gCurrQuestIdx].opts[i]}</div>`;
    }
    elOptions.innerHTML = strHTML;
}

function checkAnswer(optIdx) {
    if ((optIdx) === gQuests[gCurrQuestIdx].correctOptIndex) {
        if (checkFinish()) {
            hideElements()
            elH1.innerText = 'Victorious'
            elBtn.innerText = 'Restart'
            elBtn.style.display = 'block'
            gCurrQuestIdx = 0
        } else getNextQuestion()
    } else openModal()
}

function openModal() {
    var elModalH3 = document.querySelector('.modal h3')
    elModalH3.innerText = 'Wrong Answer'
    elModal.style.display = 'block'
}

function closeModal() {
    elModal.style.display = 'none'
}

function getNextQuestion() {
    gCurrQuestIdx++
    renderQuest()
}

function checkFinish() {
    return gCurrQuestIdx === gQuests.length - 1
}

function hideElements() {
    elImage.style.display = 'none'
    elOptions.style.display = 'none'
}

function showElements() {
    elImage.style.display = 'block'
    elOptions.style.display = 'block'
}