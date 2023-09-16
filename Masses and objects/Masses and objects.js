//1
const users = [
    {name: "Иван", age: 30},
    {name: "Петр", age: 14},
    {name: "Гена", age: 56},
    {name: "Алена", age: 18},
];

function getInfoUsers(){
    users.forEach((element) => {
        console.log("Имя: " + element.name +", возраст: " + element.age);
    });
}

//2
const cats = [
    {name: "Tomas",color:"Black", sex:"M",age: 1},
    {name: "Rodion",color:"Green", sex:"M",age: 4},
    {name: "Samanta",color:"Blue", sex:"F",age: 3},
    {name: "Katya",color:"Orange", sex:"F",age: 6},
];

document.getElementById("button_table_cats").addEventListener("click", (e) =>{
    if(cats.length === 0){
        console.log("в введеном массиве нет объектов!");
        return;
    }
    let container = document.getElementById("table_cats");
    let table = document.createElement("table");
    let row = document.createElement("tr");
    for(let key in cats[0]){
        let cell = document.createElement("td");
        cell.textContent = key;
        row.appendChild(cell);
    }
    table.appendChild(row);
    for(let i = 0; i < cats.length; i++){
        row = document.createElement("tr");
        for(let key in cats[i]){
            let cell = document.createElement("td");
            cell.textContent = cats[i][key];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
});

//3

const arr=[1, 2, 3, 4, 5, 6];

document.getElementById('test_array').textContent = "arr = " + JSON.stringify(arr);

function getWorkArray(){
    if(arr. length === 0){
        return 0;
    }
    answer = {val: 1};
    recursiaForGetWorkArray(arr.length - 1, arr, answer)
    return answer.val;
}

function recursiaForGetWorkArray(indx, array, answer){
    if(indx === 0){
        return;
    }
    answer.val *= array[indx];
    recursiaForGetWorkArray(indx - 1, array, answer);
}

//4
//arr в задании 3!

function getArraySumPrevious(array){
    if(array.length === 0){
        return [];
    }
    let answerArray = [];
    function recursiaForGetArraySumPrevious(indx, counter){
        if(indx === array.length){
            return;
        }
        counter += array[indx];
        answerArray[indx] = counter;
        recursiaForGetArraySumPrevious(indx + 1, counter);
    }
    recursiaForGetArraySumPrevious(0, 0);
    return answerArray;
}


//5
function getRange(begin, end, step = 1){
    if(step === 0){
        alert("Ошибка! step != 0");
        return [];
    }
    if((begin > end && step > 0) || (begin < end && step < 0)){
        alert("Ошибка! Введите правильный промежуток и шаг!")
        return []; 
    }
    let array = [];
    function recursiaForRange(b, e){
        if((b > e && step > 0) || (b < e && step < 0)){
            return; 
        }
        array.push(b);
        b += step;
        recursiaForRange(b, e);
    }
    recursiaForRange(begin, end);
    return array;
}


//6, 7
//тестовые данные во 2 задании
const testyObjectSort = {
    name: "",
    age: null,
}

document.getElementById('test_sample_object').textContent = "testyObjectSort = " + JSON.stringify(testyObjectSort);

function sortObjectByObject(arrayObject, sampleSortObject){
    let arraySortKey = Object.keys(sampleSortObject);
    if(arraySortKey.length === 0 || arrayObject.length === 0){
        return;
    }
    let sortArrayObject = [];
    function recursiaForArrayObject(indxArrayObject){
        if(indxArrayObject === arrayObject.length){
            return;
        }
        let sortObject = {};
        function recursiaForArraySortKey(indxArraySortKey){
            if(indxArraySortKey === arraySortKey.length){
                return;
            }
            if(arrayObject[indxArrayObject][arraySortKey[indxArraySortKey]]){
                sortObject[arraySortKey[indxArraySortKey]] = arrayObject[indxArrayObject][arraySortKey[indxArraySortKey]];
            }
            recursiaForArraySortKey(indxArraySortKey + 1);
        }
        recursiaForArraySortKey(0);
        sortArrayObject.push(sortObject);
        recursiaForArrayObject(indxArrayObject + 1);
    }
    recursiaForArrayObject(0);
    return sortArrayObject;
}