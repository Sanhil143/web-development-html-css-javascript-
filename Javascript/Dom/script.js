
const container = document.getElementsByClassName('container')[0];
container.style.backgroundColor = 'red';


const box = document.getElementsByClassName('box');

for(let i=0; i<box.length; i++){
      let boxes = box[i]
      boxes.style.borderRadius = '20%'
}

