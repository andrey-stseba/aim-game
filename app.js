const stratBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

const timeList = document.querySelector('#time-list');

const timeEl = document.querySelector('#time');

let time = 20

stratBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', e => {
        if (e.target.classList.contains('time-btn')) {
            time = parseInt(e.target.getAttribute('data-time'))
            screens[1].classList.add('up')
            startGame()
        }

    })
    // Debug
startGame()

function startGame() {
    setInterval(decreaseTime, 1000)
    setTime(time)
}


function decreaseTime() {
    if (time === 0) {
        finishCame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishCame() {

}