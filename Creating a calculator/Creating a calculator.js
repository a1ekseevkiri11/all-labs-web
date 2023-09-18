const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const sign = ["+", "-", "/", "*"];

class Calculator{
    constructor(){
        this.scrin_block = document.getElementById("screen");
        this.ac();
        this.initInput();
    }
    
    initInput(){
        let buttons = document.querySelectorAll("button");
        
        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", (e) => {
                let key = e.target.textContent;
                if(digits.includes(key)){
                    if(this._screen_val.length === 11){
                        return;
                    }
                    if(this._screen_val === "0"){
                        this.cutLastCharScrinBlock();
                    }
                    this._screen_val += key;
                    this.scrin_block.textContent = this._screen_val;
                    return;
                }
                if(sign.includes(key)){
                    if(sign.includes(this._screen_val.at(-1))){
                        this.cutLastCharScrinBlock();
                    }
                    this._screen_val += key;
                    this.write();
                    return;
                }
                if(key === "="){
                    this.calc();
                    return;
                }
                if(key === "AC"){
                    this.ac();
                    return;
                }
            });
        }
    }
    
    ac(){
        this._screen_val = "";
        this.write();
    }
    
    calc(){
        try {
            if(sign.includes(this._screen_val.at(-1))){
                this.cutLastCharScrinBlock();
            }
            let answer = eval(this._screen_val);
            if(answer >= 1000000000){
                answer("Число вылезло за пределы экрана, вывел только то что влезло!")
                this._screen_val = String(answer);
            }
            this._screen_val = String(answer);
        } catch (error) {
            alert("ТЫ СДЕЛАЛ ЧТО-ТО НЕ ТАК\nНЕ ДЕЛАЙ ТАК БОЛЬШЕ!");
            this.ac();
        }
        this.write();
    }

    cutLastCharScrinBlock(){
        let new_string =  this._screen_val.slice(0, -1);
        this._screen_val = new_string;
    }

    write(){
        this.scrin_block.textContent = this._screen_val;
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const APP = new Calculator();
});