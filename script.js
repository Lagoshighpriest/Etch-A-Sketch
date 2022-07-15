const div = document.createElement('div');

div.classList.add('container');

document.body.appendChild(div);


const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');

div.appendChild(div1);
div.appendChild(div2);
div.appendChild(div3);
div.appendChild(div4);

div1.classList.add('container-grid');
div2.classList.add('container-grid');
div3.classList.add('container-grid');
div4.classList.add('container-grid');

const button = document.getElementById('button');

let no_of_grid = (grid)=>{
    let num = 100;
    prompt("How many grids do you want?");
}

button.addEventListener('click', no_of_grid);