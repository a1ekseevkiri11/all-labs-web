//3
const dayOfTheWeek = ["Понедельник","Вторник", "Среда", "Четрверг", "Пятница", "Суббота", "Воскресенье"];

//4
const box = [
    {
        x: 30,
        y: 40,
        z: 50,
    },
    {
        x: 30,
        y: 50,
        z: 40,
    },
    {
        x: 40,
        y: 50,
        z: 30,
    },
    {
        x: 40,
        y: 30,
        z: 50,
    },
    {
        x: 50,
        y: 30,
        z: 40,
    },
    {
        x: 50,
        y: 40,
        z: 30,
    },
];
const foamRubber = 5;

window.onload = function(){
    document.getElementById("button_form").addEventListener("click", greetings);
    document.getElementById("division").addEventListener("click", divisionWithRemainder);
    document.getElementById("day_of_the_week_from_number").addEventListener("click", dayOfTheWeekFromNumber);
    document.getElementById("number_of_cars").addEventListener("click", numberOfCars);
    //1
    function greetings(){
        let Name = document.getElementById("name").value;
        let Surname = document.getElementById("surname").value;
        let NameFather = document.getElementById("name_father").value;
        let Age = document.getElementById("age").value;
        if(!Name || !Surname || !NameFather || !Age){
            alert("Введите все данные!");
            return;
        }
        if(Age < 0){
            alert("Возраст не может быть меньше нуля!");
            return;
        }
        if(Age < 7){
            alert("Привет, " + Name);
            return;
        }
        if(Age < 18){
            alert("Здравствуй, " + Surname);
            return;
        }
        alert("Здравствуйте, " + Name + " " + NameFather);
    }

    //2
    function divisionWithRemainder(){
        let dividend = document.getElementById("dividend").value;
        let divider = document.getElementById("divider").value;
        if(!dividend || !divider){
            alert("Введите все числа!");
            return;
        }
        alert("Частное: " + Math.floor(dividend / divider) + "  Остаток: " + dividend % divider);
    }

    //3
    function dayOfTheWeekFromNumber(){
        let day = document.getElementById("day_of_the_week").value;
        if(!day){
            alert("Введите число от 1 до 7");
            return;
        }
        if(day <= 0 || day > 7){
            alert("Введите число от 1 до 7");
            return;
        }
        alert(dayOfTheWeek[day - 1]);
    }

    //4
    function numberOfCars(){
        let cars = {
            x: document.getElementById("x").value,
            y: document.getElementById("y").value,
            z: document.getElementById("z").value,
        }
        let countOrder = document.getElementById("count_order").value
        let bestCountOrder = 0;
        for(let i = 0; i < box.length; i++){
            bestCountOrder = Math.max(bestCountOrder, getCountBox(box[i], cars));
        }
        if(bestCountOrder == 0){
            alert("Невозможно!");
            return;
        }
        alert("Ответ " + Math.ceil(countOrder / bestCountOrder));
    }

    function getCountBox(box, cars){
        let x = Math.floor(cars.x / box.x);
        let y = Math.floor(cars.y / box.y);
        let z = Math.floor(cars.z / box.z);
        let foamRubber_count = (x - 1) * foamRubber;
        while(cars.x - box.x * x - foamRubber_count < 0){
            x--;
            foamRubber_count = (x - 1) * foamRubber;
        }
        foamRubber_count = (y - 1) * foamRubber;
        while(cars.y - box.y * y - foamRubber_count < 0){
            y--;
            foamRubber_count = (y - 1) * foamRubber;
        }
        foamRubber_count = (z - 1) * foamRubber;
        while(cars.z - box.z * z - foamRubber_count < 0){
            z--;
            foamRubber_count = (z - 1) * foamRubber;
        }
        return x * y * z;
    }
}