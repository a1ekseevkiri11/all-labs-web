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