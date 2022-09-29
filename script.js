const b1 = document.getElementById('B1');
const b2 = document.getElementById('B2');
const b3 = document.getElementById('B3');
const b4 = document.getElementById('B4');
const b5 = document.getElementById('B5');
const b6 = document.getElementById('B6');
const b7 = document.getElementById('B7');
const b8 = document.getElementById('B8');
const b9 = document.getElementById('B9');

let arrBlocos = [b1,b2,b3,b4,b5,b6,b7,b8,b9];
arrBlocos.forEach(element => {
    element.addEventListener('click',(e)=> console.log("FUI CLICADO") )
    
});