function greet(name2){
    alert('Hello ' + name2)
}

var myDiv = document.getElementById('greet')
myDiv.addEventListener('click', function(){greet('Carlos')})

