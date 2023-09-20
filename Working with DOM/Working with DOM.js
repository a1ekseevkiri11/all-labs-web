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

const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
    "Go",
    "PHP",
    "Rust",
    "TypeScript",
    "C#",
    "Kotlin",
    "Perl",
    "Scala",
    "Dart",
    "Lua",
    "Haskell",
    "Objective-C",
    "R",
    "MATLAB",
    "COBOL",
    "Fortran",
    "Ada",
    "Groovy",
    "Elixir",
    "Julia",
    "Lisp",
    "Prolog",
    "Assembly",
    "VHDL",
    "PL/SQL",
    "Scratch",
    "ABAP",
    "F#",
    "COOL",
    "Clojure",
    "PowerShell",
    "Haxe",
    "SAS",
    "D",
    "Racket",
    "RPG",
    "Forth",
    "Erlang",
    "Scheme",
    "Alice",
    "Tcl",
    "Nim",
    "APL",
    "Lisp",
    "Eiffel",
    "VBA",
    "Ada",
    "Perl 6",
    "Dylan",
    "Elm",
    "Awk",
    "Smalltalk",
    "PL/I",
    "Turing",
    "COBOL",
    "Rust",
    "Dart",
    "Lua",
    "Haskell",
    "Objective-C",
    "R",
    "MATLAB",
    "COBOL",
    "Fortran",
    "Ada",
    "Groovy",
    "Elixir",
    "Julia",
    "Lisp",
    "Prolog",
    "Assembly",
    "VHDL",
    "PL/SQL",
    "Scratch",
    "ABAP",
    "F#",
    "COOL",
    "Clojure",
    "PowerShell",
    "Haxe",
    "SAS",
    "D",
    "Racket",
    "RPG",
    "Forth",
    "Erlang",
    "Scheme",
    "Alice",
    "Tcl",
    "Nim",
    "APL",
    "Lisp",
    "Eiffel",
    "VBA",
    "Ada",
    "Perl 6",
    "Dylan",
    "Elm",
    "Awk",
    "Smalltalk",
    "PL/I",
    "Turing"
];

function autocomplete(inputBlock, arr) {
    inputBlock.addEventListener("input", function(e) {
        let val = this.value;
        closeAllLists();
        if (!val) { 
            return false;
        }
        let conteiner = document.createElement("DIV");
        conteiner.setAttribute("id", this.id + "autocomplete-list");
        conteiner.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(conteiner);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                let block = document.createElement("DIV");
                block.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                block.innerHTML += arr[i].substr(val.length);
                block.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                block.addEventListener("click", function(e) {
                    inputBlock.value = this.getElementsByTagName("input")[0].value;
                    // closeAllLists();
                });
                conteiner.appendChild(block);
            }
        }
    });
    function closeAllLists(elmnt) {
        let block = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < block.length; i++) {
            if (elmnt != block[i] && elmnt != inputBlock) {
                block[i].parentNode.removeChild(block[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    autocomplete(document.getElementById("myInput"), programmingLanguages);
});

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

//support function

function getRandomInt(min, max) {
	return Math.floor( Math.random() * (max - min) + min );
}

class Config {
	constructor() {
		this.step = 0;
		this.maxStep = 20;
		this.sizeCell = 16;
		this.sizeBerry = this.sizeCell / 4;
	}
}

class Canvas {
    constructor( container ) {
        this.element = document.createElement( "canvas" );
        this.context = this.element.getContext( "2d" );
        this.element.width = 320;
        this.element.height = 400;
        container.appendChild( this.element );
    }
}

class Game {
    constructor( container ) {
        this.canvas_ = new Canvas( container );
        this.snake_ = new Snake();
        this.berry_ = new Berry( this.canvas_ );
        this.score_ = new Score( ".game-score .score-count", 0 );
        new GameLoop( this.update.bind(this), this.draw.bind(this) );
    }

    update() {
        this.snake_.update( this.berry_, this.score_, this.canvas_ );
    }

    draw() {
        this.canvas_.context.clearRect( 0, 0, this.canvas_.element.width, this.canvas_.element.height );
        this.snake_.draw( this.canvas_.context );
        this.berry_.draw( this.canvas_.context );

    }

}

class Score {
    constructor( scoreBlock, score = 0 ) {

        this.scoreBlock = document.querySelector( scoreBlock );
        this.score = score;

        this.draw();

    }

    incScore() {
        this.score++;
        this.draw();
    }

    setToZero() {
        this.score = 0;
        this.draw();
    }

    draw() {
        this.scoreBlock.innerHTML = this.score;
    }
    
}

class Snake {
	
	constructor(){

		this.config = new Config();
		this.x = 160;
		this.y = 160;
		this.dx = this.config.sizeCell;
		this.dy = 0;
		this.tails = [];
		this.maxTails = 3;

		this.control();

	}

	update( berry, score, canvas ) {
		this.x += this.dx;
		this.y += this.dy;
	
		if (this.x < 0) {
			this.x = canvas.element.width - this.config.sizeCell;
		} else if ( this.x >= canvas.element.width ) {
			this.x = 0;
		}
	
		if (this.y < 0) {
			this.y = canvas.element.height - this.config.sizeCell;
		} else if ( this.y >= canvas.element.height ) {
			this.y = 0;
		}
	
		this.tails.unshift( { x: this.x, y: this.y } );
	
		if ( this.tails.length > this.maxTails ) {
			this.tails.pop();
		}
	
		this.tails.forEach( (el, index) => {
	
			if ( el.x === berry.x && el.y === berry.y ) {
				this.maxTails++;
				score.incScore();
				berry.randomPosition();
			}
	
			for( let i = index + 1; i < this.tails.length; i++ ) {
	
				if ( el.x == this.tails[i].x && el.y == this.tails[i].y ) {
					this.death();
					score.setToZero();
					berry.randomPosition();
				}
	
			}
	
		} );

	}

	draw(context) {

		this.tails.forEach( (el, index) => {
			if (index == 0) {
				context.fillStyle = "#FA0556";
			} else {
				context.fillStyle = "#A00034";
			}
			context.fillRect( el.x, el.y, this.config.sizeCell, this.config.sizeCell );
		} );

	}

	death() {

		this.x = 160;
		this.y = 160;
		this.dx = this.config.sizeCell;
		this.dy = 0;
		this.tails = [];
		this.maxTails = 3;

	}

	control() {
		
		document.addEventListener("keydown",  (e) => {
			if ( e.code == "KeyW" && this.dy !== this.config.sizeCell) {
				this.dy = -this.config.sizeCell;
				this.dx = 0;
			} else if ( e.code == "KeyA" && this.dx !== this.config.sizeCell) {
				this.dx = -this.config.sizeCell;
				this.dy = 0;
			} else if ( e.code == "KeyS" && this.dy !== -this.config.sizeCell) {
				this.dy = this.config.sizeCell;
				this.dx = 0;
			} else if ( e.code == "KeyD" && this.dx !== -this.config.sizeCell ) {
				this.dx = this.config.sizeCell;
				this.dy = 0;
			}
		});

	}

}

class GameLoop {

    constructor( update, draw ) {

        this.update = update;
        this.draw = draw;

        this.config = new Config();

        this.animate = this.animate.bind(this);
        this.animate();

    }

    animate() {

        requestAnimationFrame( this.animate );
        if ( ++this.config.step < this.config.maxStep) {
            return;
        }
        this.config.step = 0;

        this.update();
        this.draw();

    }

}

class Berry {

    constructor( canvas ) {

        this.x = 0;
        this.y = 0;
        this.canvas = canvas;

        this.config = new Config();
        this.randomPosition();

    }

    draw(context) {

        context.beginPath();
        context.fillStyle = "#A00034";
        context.arc( this.x + (this.config.sizeCell / 2 ), this.y + (this.config.sizeCell / 2 ), this.config.sizeBerry, 0, 2 * Math.PI );
        context.fill();

    }

    randomPosition() {
        this.x = getRandomInt( 0, this.canvas.element.width / this.config.sizeCell ) * this.config.sizeCell;
        this.y = getRandomInt( 0, this.canvas.element.height / this.config.sizeCell ) * this.config.sizeCell;
    }

}


window.addEventListener('DOMContentLoaded', () => {
    const APP = new Game(document.querySelector(".canvas-wrapper"));
});

