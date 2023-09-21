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


//////////////////////////////
//                          //
// ████████████████████████ //
// █   █ ██ █    █ ██ █   █ //
// █ ███  █ █ ██ █ █ ██ ███ //
// █   █ █  █    █  ███   █ //
// ███ █ ██ █ ██ █ █ ██ ███ //
// █   █ ██ █ ██ █ ██ █   █ //
// ████████████████████████ //
//                          //
//////////////////////////////

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
    constructor() {
        this.element = document.getElementById("game-canvas");
        this.context = this.element.getContext( "2d" );
        this.element.width = 320;
        this.element.height = 400;
    }
}

class Game {
    constructor( ) {

        this.canvas_ = new Canvas( );
        this.snake_ = new Snake();
        this.berry_ = new Berry( this.canvas_ );
        this.score_ = new Score( ".game-score .score-count", 0 );
        this.gameloop_ = new GameLoop( this.update.bind(this), this.draw.bind(this) );
    }

    update() {
        this.snake_.update( this.berry_, this.score_, this.canvas_ );
    }

    draw() {
        this.canvas_.context.clearRect( 0, 0, this.canvas_.element.width, this.canvas_.element.height );
        this.snake_.draw( this.canvas_.context );
        this.berry_.draw( this.canvas_.context );
    }

    destroy(){
        delete this.canvas_
        delete this.snake_
        delete this.berry_
        delete this.score_
        this.gameloop_.flagDestroy = true;
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
        this.flagDestroy = false;

    }

    animate() {
        if(this.flagDestroy){
            return;
        }
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





///////////////////////////////////////////////////
//                                               //
// █████████████████████████████████████████████ //
// █ ███    █    ██  █  █    █   █ ██ █   █ ██ █ //
// █ ███ ██ █ ██  ██   ██ ██ ██ ██  █ ██ ██ ██ █ //
// █ ███    █    ████ ███    ██ ██ █  ██ ██    █ //
// █ ███ ██ █ ██  ███ ███ █ ███ ██ ██ ██ ██ ██ █ //
// █   █ ██ █    ████ ███ █ ██   █ ██ ██ ██ ██ █ //
// █████████████████████████████████████████████ //
//                                               //
///////////////////////////////////////////////////


//support function

const ConfigLabirint = {
    defaultSizeLabirint: 1,
    emptyCell: 0,
    occupiedСell: 1,
    finishCell: 2,
    sizeCanvas: 500,
    levlUpp: 2,
    obstacleColor: "black",
    matrixColor: "white",
    playerColor: "#538109",
    finishColor: "red",
}


class Labirint{
    constructor(){
        this._element = document.getElementById( "labirint-canvas" );
        this._element.setAttribute('width', ConfigLabirint.sizeCanvas);
        this._element.setAttribute('height', ConfigLabirint.sizeCanvas);
        this._context = this._element.getContext( "2d" );


        this._sizeLabirint =  ConfigLabirint.defaultSizeLabirint;
        this._cellSize = ConfigLabirint.sizeCanvas / this._sizeLabirint;
    }

    newLevl(){
        this._sizeLabirint += ConfigLabirint.levlUpp;
        this._cellSize = ConfigLabirint.sizeCanvas / this._sizeLabirint;
        this.getMatrix();
        this.generateLabirint();
        this.setFinish();
        this.draw();
    }

    setFinish(){
        this._matrix[this._sizeLabirint - 1][this._sizeLabirint - 1] = ConfigLabirint.finishCell;
    }

    getMatrix(){
        this._matrix = [];
        for (let i = 0; i <  this._sizeLabirint; i++) {
            this._matrix[i] = [];
            for (let j = 0; j <  this._sizeLabirint; j++) {
                this._matrix[i][j] = ConfigLabirint.occupiedСell;
            }
        }
    }

    generateLabirint(){
        let array_of_even_numbers = [];
        let map = this._matrix;
        let n = this._matrix.length
        for (let i = 0; i < n; i++){
            if(getEven(i)){
                array_of_even_numbers.push(i);
            }
        }
        
        const start_x = getRandomFrom(array_of_even_numbers);
        const start_y = getRandomFrom(array_of_even_numbers);
    
        let removing = {
            x: start_x,
            y: start_y
        };
    
        setField(start_x, start_y, 0);
        
        while (!getLabirint()) {
            moveRemoving();
        }
    
        this._matrix = map.slice();
    
        return;
    
        function getEven(n) {
            return n % 2 === 0;
        }
    
        function getLabirint () {
            for (let x = 0; x < n; x++) {
                for (let y = 0; y < n; y++) { 
                    if (getEven(x) && getEven(y) && getField(x, y) === ConfigLabirint.occupiedСell) {
                        return false;
                    }
                }
            }
            return true;
        }
    
        function getRandomFrom(array) {
            const index = Math.floor(Math.random() * array.length);
            return array[index];
        }
        
        function setField (x, y, value) {
            if (x < 0 | x >= n | y < 0 | y >= n) {
                return null;
            };
            map[x][y] = value;
        }
    
        function getField(x, y) {
            if (x < 0 | x >= n | y < 0 | y >= n) {
                return null;
            }
            return map[x][y];
        }
    
        function moveRemoving() {
            const directs = [];
            if (removing.x > 0) {
                directs.push("l");
            };
            if (removing.x < n - 2) {
                directs.push("r");
            };	
            if (removing.y > 0) {
                directs.push("u");
            };
            if (removing.y < n - 2) {
                directs.push("d");
            };
            const direct = getRandomFrom(directs);
            switch (direct) {
                case "l":
                    if (getField(removing.x - 2, removing.y) === ConfigLabirint.occupiedСell) {
                        setField(removing.x - 1, removing.y, ConfigLabirint.emptyCell);
                        setField(removing.x - 2, removing.y, ConfigLabirint.emptyCell);
                    };
                    removing.x -= 2;
                    break;
                case "r":
                    if (getField(removing.x + 2, removing.y) === ConfigLabirint.occupiedСell) {
                        setField(removing.x + 1, removing.y, ConfigLabirint.emptyCell);
                        setField(removing.x + 2, removing.y, ConfigLabirint.emptyCell);
                    };
                    removing.x += 2;
                    break;
                case "u":
                    if (getField(removing.x, removing.y - 2) === ConfigLabirint.occupiedСell) {
                        setField(removing.x, removing.y - 1, ConfigLabirint.emptyCell);
                        setField(removing.x, removing.y - 2, ConfigLabirint.emptyCell);
                    };
                    removing.y -= 2
                    break;
                case "d":
                    if (getField(removing.x, removing.y + 2) === ConfigLabirint.occupiedСell) {
                        setField(removing.x, removing.y + 1, ConfigLabirint.emptyCell);
                        setField(removing.x, removing.y + 2, ConfigLabirint.emptyCell);
                    };
                    removing.y += 2;
                    break;
            }
        }
    }

    requestEptySell(x, y){
        if(x < 0 || y < 0 || x >= this._sizeLabirint || y >= this._sizeLabirint){
            return false;
        }
        if(this._matrix[x][y] === ConfigLabirint.occupiedСell){
            return false;
        }
        return true;
    }

    requestFinish(x, y){
        if(x === this._sizeLabirint - 1 && y === this._sizeLabirint - 1 ){
            return true;
        }
        return false;
    }

    draw(){
        for (let i = 0; i < this._sizeLabirint; i++) {
            for (let j = 0; j < this._sizeLabirint; j++) {
                if(this._matrix[j][i] === ConfigLabirint.occupiedСell){
                    this.fillInTheCell(j, i, ConfigLabirint.obstacleColor);
                }
                else if(this._matrix[j][i] === ConfigLabirint.emptyCell){
                    this.fillInTheCell(j, i, ConfigLabirint.matrixColor);
                }
                else{
                    this.fillInTheCell(j, i, ConfigLabirint.finishColor);
                }
            }
        }
    }

    fillInTheCell(x, y, color){
        x *= this._cellSize;
        y *= this._cellSize;
        this._context.fillStyle = color;
        this._context.fillRect(x, y, this._cellSize, this._cellSize);
    }

    drawACircle(x, y, color){
        x *= this._cellSize;
        y *= this._cellSize;
        this._context.beginPath();
        this._context.arc(x + this._cellSize / 2, y + this._cellSize / 2, this._cellSize / 3 , 0, 2 * Math.PI);
        this._context.fillStyle = color;
        this._context.fill();
        this._context.stroke();
    }
}

class Player{
    constructor(){
        this.score_ = new Score( "#score-labirint");
        this.initInput();
        this.restart();
    }

    setToZeroPosition(){
        this._positionX = 0;
        this._positionY = 0;
    }

    restart(){
        this.score_.setToZero();
        this.labirint = new Labirint();
        this.newLevl();
    }

    newLevl(){
        this.score_.incScore();
        this.labirint.newLevl();
        this.setToZeroPosition();
        this.draw();
    }

    finish(){
        if(this.labirint.requestFinish(this._positionX, this._positionY)){
            this.newLevl();
        }
    }

    initInput(){
        document.addEventListener("keydown",  (e) => {
            if ( e.code === "KeyW") {
                if(this.labirint.requestEptySell(this._positionX, this._positionY - 1)){
                    this.labirint.draw();
                    this._positionY--;
                    this.draw();
                    this.finish();
                }
            }
            else if ( e.code === "KeyS") {
                if(this.labirint.requestEptySell(this._positionX, this._positionY + 1)){
                    this.labirint.draw();
                    this._positionY++;
                    this.draw();
                    this.finish();
                }
            }
            else if ( e.code === "KeyA") {
                if(this.labirint.requestEptySell(this._positionX - 1, this._positionY)){
                    this.labirint.draw();
                    this._positionX--;
                    this.draw();
                    this.finish();
                }
            } 
            else if ( e.code === "KeyD") {
                if(this.labirint.requestEptySell(this._positionX + 1, this._positionY)){
                    this.labirint.draw();
                    this._positionX++;
                    this.draw();
                    this.finish();
                }   
            }
        });
    }

    draw(){
        this.labirint.drawACircle(this._positionX, this._positionY, ConfigLabirint.playerColor);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const APP1 = new Game(document.querySelector(".canvas-wrapper"));
    const APP2 = new Player();
    document.getElementById("labirint").style.display = 'none';
    document.getElementById("game").style.display = null;
    document.getElementById("button-snake").addEventListener("click", () =>{
        APP1.snake_.death();
        document.getElementById("labirint").style.display = 'none';
        document.getElementById("game").style.display = null;
    });

    document.getElementById("button-labirint").addEventListener("click", () =>{
        APP2.restart();
        document.getElementById("game").style.display = 'none';
        document.getElementById("labirint").style.display = null;
    });
})