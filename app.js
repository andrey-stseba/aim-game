const stratBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

const timeList = document.querySelector('#time-list');

const timeEl = document.querySelector('#time');

const board = document.querySelector('#board');

let time = 0

let score = 0

const colors = ['#CD0000','#CD3700','#CD1076','#CD4F39','#CD5B45','#CD6600','#CD8500','#CDCD00','#66CD00','#00CD00','#00C5CD','#0000CD'];

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

    board.addEventListener('click',e =>{
        if (e.target.classList.contains('circle')){
            score++
            e.target.remove()
            createRandomCircle()
        }

    })
 

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
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
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счет: <span class='primary'>${score}</span></h1>`
}


function createRandomCircle(){
    const circle = document.createElement('div');
    const size = getRandomNumber(10,60);
    const {width,height} = board.getBoundingClientRect();
    const x = getRandomNumber(0,width - size);
    const y = getRandomNumber(0,height - size);
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height= `${size}px`
    circle.style.top = `${y}px`
    circle.style.left =`${x}px`
    setColor(circle)
    board.append(circle)
}

function getRandomNumber(min,max){
    return Math.round(Math.random()*(max-min)+min)
}

function setColor(e){
    const color = getRandomColor()
    e.style.backgroundColor = color
    }

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

