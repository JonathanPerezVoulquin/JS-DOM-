const list = document.getElementById('list');
/* console.log(list); */

const li = document.createElement('li');

li.textContent = 'My first element li from JS';

list.appendChild(li);

const title = document.getElementById('title');
title.textContent = 'Hello, modifying the title from js (DOM)';


const arrayElement = ['First element', 'Second', 'Third']
// Recorré la lista arrayElement y crea el elemento li con document.createElement
/* arrayElement.forEach(item =>{
    console.log(item)
    const li = document.createElement('li');
    li.textContent = item
    list.appendChild(li);
}) */



// haciendolo igual con template string
arrayElement.forEach( item =>{
    list.innerHTML += `<li>${item}</li>`

})


// averiguar sobre el problema del Reflow