// variables
let objectColor = {
    'red': 0,
    'yellow': 0,
    'green': 0
}
let colors = document.querySelectorAll('.colors');
let clear = document.querySelector('.clear');

colors.forEach((color) => {
    color.onclick = () => {
        objectColor[color.value] += 1;
        color.innerHTML =  objectColor[color.value];
    }
});

clear.onclick = () =>{
    clearValue();
    colors.forEach((color) => {
        color.innerHTML = objectColor[color.value];
    })
}


function clearValue(){
   objectColor['red'] = 0;
   objectColor['yellow'] = 0;
   objectColor['green'] = 0;
}