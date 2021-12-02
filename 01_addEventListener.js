function greet(name){                     //saludar = greet
  
    alert('Hello '+ name)    
}

function greet_div(name){               //  greet function to change the div
    var divGreet = document.getElementById('greet_user')
    divGreet.innerText = 'Hello, greet me ' + name 

}

function origin_div(){
    var divGreet = document.getElementById('greet_user')
    divGreet.innerText = 'Hola, acá voy a saludar al usuario'
}


var myBoton1 = document.getElementById('myBoton1')               // IMPORTANT!   
myBoton1.addEventListener('click', function(){greet('Gustavo')}) // para pasar parámetros de una función en un addEventListener
                                                                 // SE DEBE COLOCAR PREVIAMENTE UNA FUNCION ANÓNIMA seguido de la función propia y sus párametros correspondientes

var myBoton2 = document.getElementById('myBoton2')
myBoton2.addEventListener('click', function(){greet('María')}) //función ánonima

var myBoton3 = document.getElementById('myBoton3')
myBoton3.addEventListener('click', function(){greet('Aldana')}) // función ánonima

var myBoton2 = document.getElementById('myBoton4')
myBoton2.addEventListener('click', function(){greet('Donatella')}) // funcion ánonima

// div greet with new function

var myBoton0 = document.getElementById('myBoton0')
myBoton0.addEventListener('click', function(){greet_div('Gustavo')})
myBoton0.addEventListener('mouseover', function(){origin_div()})


const num = (num1,num2) => {
    return `el numero es: ${num1 + num2}`
}

const result = num(10,20)
console.log(result)