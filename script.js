function add(){
    var a= prompt("How many pair of shoes you need?")
    if(a){
        alert("added to cart")
    }
}

function shop(){
    alert("Keep rocking,keep Walking")
}

var header = document.querySelector("h1")
header


header.style.color = 'blue' 


function getRandomColor()/*camelcasing*/{
    var letters = "0123456789ABCDEF";
    var color = '#';
    for(var i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}

function changeHeaderColor(){
    colorInput = getRandomColor()
    header.style.color = colorInput;
}

setInterval("changeHeaderColor()",300);