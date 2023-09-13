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
drawingMultiplicationTable();

function drawingMultiplicationTable(){
    let container = document.getElementById('multiplication_table');
    const size = 10;
    let table = document.createElement("table");
    for(let i = 1; i <= size; i++){
        let row = document.createElement("tr");
        for(let j = 1; j <= size; j++){
            let cell = document.createElement("td");
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
    //alert("Все!");
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


