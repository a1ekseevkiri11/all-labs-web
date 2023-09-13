//1
drawingFigure();

function drawingFigure(){
    let container = document.getElementById('figure');
    const size = 5;
    let str = "";
    for(let i = 0; i < size; i++){
        for(let j = 0; j <= i; j++){
            if(j == 0 || j == i){
                str += "#";
            }
            else{
                str += "0";
            }
        }
        str += "<br>";
    }
    for(let i = size; i >= 0; i--){
        for(let j = i; j >= 0; j--){
            if(j == 0 || j == i){
                str += "#";
            }
            else{
                str += "0";
            }
        }
        str += "<br>";
    }
    container.innerHTML = str;
}


//2

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("draw_multiplication_table").addEventListener("click", (e) => {drawingMultiplicationTable(false)});
    document.getElementById("draw_multiplication_table_mod").addEventListener("click", (e) => {drawingMultiplicationTable(true)});
});

function drawingMultiplicationTable(flag){
    let container = document.getElementById('multiplication_table');
    container.innerHTML = "";
    const size = 10;
    let table = document.createElement("table");
    for(let i = 1; i <= size; i++){
        let row = document.createElement("tr");
        for(let j = 1; j <= size; j++){
            let cell = document.createElement("td");
            cell.textContent = i * j;
            row.appendChild(cell);
            if(flag && j === 6){
                break;
            }
        }
        table.appendChild(row);
        if(flag && i === 5){
            break;
        }
    }
    container.appendChild(table);
    alert("Все!");
}


//3
function arrayNums(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            return false;
        }
    }
    return true;
}

//4
document.getElementById("button_count_car").addEventListener("click", (e) =>{
    const countGas = 100;
    let countCar = document.getElementById('count_car').value;
    if(countCar < 0){
        alert("Число грузовиков должно быть больше 0");
        return;
    }
    if(countCar == 0){
        alert("0 км");
        return;
    }
    let temp = 0;
    for(let i = 1; i <= countCar; i++){
        temp += 1 / i;
    }
    alert((countGas * temp).toFixed(3) + " км");
});

//5
document.getElementById("button_limit").addEventListener("click", (e) =>{
    let limit = document.getElementById('limit').value;
    let counter = 0;
    let key = 2;
    for(let i = 0; i < limit; i++){
        temp = i;
        while(temp > 0){
            if(temp % 10 === key){
                counter++
            }
            temp = parseInt(temp / 10);
        }
    }
    alert(counter);
});


//6
document.getElementById("button_string_comparison").addEventListener("click", (e) =>{
    let str1 = document.getElementById('str1').value;
    let str2 = document.getElementById('str2').value;
    if(str1.length !== str2.length){
        alert("Строки не являются перестановкой друг друга");
        return;
    }
    let mapping = {};
    for(let i = 0; i < str1.length; i++){
        if(!mapping[str1[i]]){
            mapping[str1[i]] = 1;
        }
        else{
            mapping[str1[i]]++;
        }
    }
    for(let i = 0; i < str2.length; i++){
        if(!mapping[str2[i]]){
            alert("Строки не являются перестановкой друг друга");
            return;
        }
        else if(mapping[str2[i] == 0]){
            alert("Строки не являются перестановкой друг друга");
            return;
        }
        else{
            mapping[str2[i]]--;
        }
    }
    alert("Строки являются перестановкой друг друга");
});


//7
//settings
const sign = ["+", "-"];
const defaultLengthExample = 2;
const defaultCountLife = 3;
const defaultMaxNums = 10;


//interface_settings
const defaultTextRecord = "Record: ";
const defaultTextScore = "Score: ";
const defaultTextLife = "Life: ";
const defaultTextExample = "Example: ";



//support_function

function randonNumberString(max){
    return String(randonNumber(max));
}

function randonNumber(max){
    return Math.floor(Math.random() * max);
}

function randomSign(){
    return sign[randonNumber(sign.length)];
}



//interface

class Interface{
    constructor(value, block, text){
        this._value = value;
        this._block = block;
        this._text = text;
        this.write();
    }

    write(){
        this._block.textContent = this._text + this._value;
    }
}

class Score extends Interface{
    constructor(){
        super(0, document.getElementById('score-text'), defaultTextScore);
        let recordScore;
        if(localStorage.getItem('record')){
            recordScore = localStorage.getItem('record');
        }
        else{
            recordScore = 0;
        }
        this._record = new Interface(recordScore, document.getElementById('record-text'), defaultTextRecord);
    }

    setToZero(){
        localStorage.setItem('record', this._record._value);
        this._value = 0;
        this.write();
    }

    inc(){
        this._value++;
        if(this._value > this._record._value){
            this._record._value = this._value;
            localStorage.setItem('record', this._record._value);
            this._record.write();
        }
        this.write();
    }
}

class Life extends Interface{
    constructor(){
        super(defaultCountLife, document.getElementById('life'), defaultTextLife);
    }

    alive(){
        if(this._value <= 1){
            return false;
        }
        return true;
    }

    dec(){
        this._value--;
        this.write();
    }

    setToDefault(){
        this._value = defaultCountLife;
        this.write();
    }
}

class Example extends Interface{
    constructor(){
        super(" ", document.getElementById('example'), defaultTextExample);
        this._trueAnswer;
        this.generation();
    }

    generation(){
        let text = "";
        text += randonNumberString(defaultMaxNums);
        for(let i = 1; i < defaultLengthExample; i++){
            text += randomSign() + randonNumberString(defaultMaxNums);
        }
        this._value = text;
        this._trueAnswer = eval(text);
        this.write();
    }

    examination(answer){
        if(answer == this._trueAnswer){
            return true;
        }
        return false;
    }

}

class Play{
    constructor(){
        this.life_ = new Life();
        this.score_ = new Score();
        this.example_ = new Example();
        this._answerBlock = document.getElementById('answer');
        this._answer;
        this.update();
    }

    clearAnswerBlock(){
        this._answerBlock.value = '';
    }

    getAnswer(){
        this._answer = this._answerBlock.value;
    }

    reset(){
        this.clearAnswerBlock();
        alert("game over! Счет: " + this.score_._value);
        this.life_.setToDefault();
        this.score_.setToZero();
    }

    step(){
        if(!this.life_.alive()){
            this.reset();
            return;
        }
        this.getAnswer();
        this.clearAnswerBlock();
        if(this.example_.examination(this._answer)){
            alert("Верно!");
            this.score_.inc();
            return;
        }
        alert("Неверно! Правильный ответ: " + this.example_._trueAnswer);
        this.life_.dec();
    }

    update(){
        document.getElementById("test").addEventListener("click", (e) =>{
            this.step();
            this.example_.generation();
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const APP = new Play();
});