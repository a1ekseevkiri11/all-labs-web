//1
const textBlock = document.getElementById("input");
const contentText = "тут какой-то текст который будет выводится на сайт после нажатия кнопки";

document.getElementById("button_filling").addEventListener("click", (e) =>{
    textBlock.value = contentText;
});

//2


document.getElementById("button_examination_filling").addEventListener("click", (e) =>{
    if(textBlock.value === ""){
        alert("Вы ничего не ввели");
        return;
    }
    alert("Вы ввели " + textBlock.value);
});

//3
document.getElementById("button_block").addEventListener("click", (e) =>{
    const disabled = textBlock.disabled;
    if (disabled) {
        textBlock.disabled = false;
        return;
    }
    textBlock.disabled = true;
});

//4
const button_hide = document.getElementById("button_hide");
button_hide.addEventListener("click", (e) =>{
    if(textBlock.type === 'text'){
        textBlock.setAttribute('type', 'password');
        button_hide.textContent = "Скрыто";
        return;
    }
    textBlock.setAttribute('type', 'text');
    button_hide.textContent = "Доступно";
});

//5
const button_hide_text_map = document.getElementById("button_hide_text_map");
button_hide_text_map.addEventListener("click", (e) =>{
    if(textBlock.style.display === 'none'){
        textBlock.style.display = null;
        button_hide_text_map.textContent = "Скрыть поле";
        return;
    }
    textBlock.style.display = 'none';
    button_hide_text_map.textContent = "Показать поле";
});

//6
const six = document.querySelector(".six");
six.onmouseover = six.onmouseout = handler;
function handler(e){
    if(e.target === six){
        return;
    }
    if(e.type === 'mouseover'){
        e.target.style.background = "#009e15";
    }
    if (e.type === 'mouseout') {
        e.target.style.background = "#ff0000";
    }
}

//7
const arrayFigure = document.querySelectorAll(".figure_six");
for(let i = 0; i < arrayFigure.length; i++){
    arrayFigure[i].addEventListener("click", (e) => {
        fill();
        arrayFigure[i].style.background = "#009e15";
    });
}

function fill(){
    for(let i = 0; i < arrayFigure.length; i++){
        arrayFigure[i].style.background = "#ff0000";
    }
}


//8

//9
const ballBlock = document.getElementById('ball');
const fieldBlock = document.getElementById('field');
const limits = {
    top: fieldBlock.offsetTop,
    right: fieldBlock.offsetWidth + fieldBlock.offsetLeft - ballBlock.offsetWidth,
    bottom: fieldBlock.offsetHeight + fieldBlock.offsetTop - ballBlock.offsetHeight,
    left: fieldBlock.offsetLeft,
};

let ball = document.getElementById('ball');

ball.onmousedown = (e) => {
    let coords = getCoords(ball);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    function moveAt(e) {
        let newPosition = {
            left: e.pageX - shiftX,
            top: e.pageY - shiftY,
        }
        if(newPosition.left < limits.left){
            newPosition.left = limits.left;
        }
        else if(newPosition.left > limits.right){
            newPosition.left = limits.right;
        }
        if(newPosition.top < limits.top){
            newPosition.top = limits.top;
        }
        else if(newPosition.top > limits.bottom){
            newPosition.top = limits.bottom;
        }
        ball.style.left = newPosition.left + 'px';
        ball.style.top = newPosition.top + 'px';
    }

    document.onmousemove = (e) => {
        moveAt(e);
    };

    ball.onmouseup = () => {
        document.onmousemove = null;
        ball.onmouseup = null;
    };
}

function getCoords(elem) { 
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + scrollY,
        left: box.left + scrollX,
    };
}



//10

let scoreBlock;
let score = 0;

const config = {
	step: 0,
	maxStep: 10,
	sizeCell: 16,
	sizeBerry: 16 / 4
}

const snake = {
	x: 160,
	y: 160,
	dx: config.sizeCell,
	dy: 0,
	tails: [],
	maxTails: 3
}

let berry = {
	x: 0,
	y: 0
} 


let canvas = document.querySelector("#game-canvas");
let context = canvas.getContext("2d");
scoreBlock = document.querySelector(".game-score .score-count");
drawScore();

function gameLoop() {

	requestAnimationFrame( gameLoop );
	if ( ++config.step < config.maxStep) {
		return;
	}
	config.step = 0;

	context.clearRect(0, 0, canvas.width, canvas.height);

	drawBerry();
	drawSnake();
}
requestAnimationFrame( gameLoop );

function drawSnake() {
	snake.x += snake.dx;
	snake.y += snake.dy;

	collisionBorder();

	// todo бордер
	snake.tails.unshift( { x: snake.x, y: snake.y } );

	if ( snake.tails.length > snake.maxTails ) {
		snake.tails.pop();
	}

	snake.tails.forEach( function(el, index){
		if (index == 0) {
			context.fillStyle = "#FA0556";
		} else {
			context.fillStyle = "#A00034";
		}
		context.fillRect( el.x, el.y, config.sizeCell, config.sizeCell );

		if ( el.x === berry.x && el.y === berry.y ) {
			snake.maxTails++;
			incScore();
			randomPositionBerry();
		}

		for( let i = index + 1; i < snake.tails.length; i++ ) {

			if ( el.x == snake.tails[i].x && el.y == snake.tails[i].y ) {
				refreshGame();
			}

		}

	} );
}

function collisionBorder() {
	if (snake.x < 0) {
		snake.x = canvas.width - config.sizeCell;
	} else if ( snake.x >= canvas.width ) {
		snake.x = 0;
	}

	if (snake.y < 0) {
		snake.y = canvas.height - config.sizeCell;
	} else if ( snake.y >= canvas.height ) {
		snake.y = 0;
	}
}
function refreshGame() {
	score = 0;
	drawScore();

	snake.x = 160;
	snake.y = 160;
	snake.tails = [];
	snake.maxTails = 3;
	snake.dx = config.sizeCell;
	snake.dy = 0;

	randomPositionBerry();
}

function drawBerry() {
	context.beginPath();
	context.fillStyle = "#A00034";
	context.arc( berry.x + (config.sizeCell / 2 ), berry.y + (config.sizeCell / 2 ), config.sizeBerry, 0, 2 * Math.PI );
	context.fill();
}

function randomPositionBerry() {
	berry.x = getRandomInt( 0, canvas.width / config.sizeCell ) * config.sizeCell;
	berry.y = getRandomInt( 0, canvas.height / config.sizeCell ) * config.sizeCell;
}

function incScore() {
	score++;
	drawScore();
}

function drawScore() {
	scoreBlock.innerHTML = score;
}

function getRandomInt(min, max) {
	return Math.floor( Math.random() * (max - min) + min );
}

document.addEventListener("keydown", function (e) {
	if ( e.code == "KeyW" ) {
		snake.dy = -config.sizeCell;
		snake.dx = 0;
	} else if ( e.code == "KeyA" ) {
		snake.dx = -config.sizeCell;
		snake.dy = 0;
	} else if ( e.code == "KeyS" ) {
		snake.dy = config.sizeCell;
		snake.dx = 0;
	} else if ( e.code == "KeyD" ) {
		snake.dx = config.sizeCell;
		snake.dy = 0;
	}
});

// window.addEventListener('DOMContentLoaded', () => {
//     const APP = new Game();
// });

