var figura = document.getElementById("figura");
var titulo = document.getElementById("titulo");

function circulo() {
    titulo.innerText = 'Circulo';
    figura.classList.toggle("circulo");
}


function rectangulo() {
    titulo.innerText = 'Rectangulo';
    figura.classList.toggle("rectangulo")
}


function rombo(){
    titulo.innerText = 'Rombo';
    figura.classList.toggle("rombo")
}


function imagen(){
    titulo.innerText = 'Imagen';
    figura.classList.toggle("imagen")
}


function gif(){
    titulo.innerText = 'Gif';
    figura.classList.toggle("gif")
}


function triangulo(){
    titulo.innerText = 'Triangulo';
    figura.classList.toggle("triangulo")
}


function hoja(){
    titulo.innerText = 'Hoja';
    figura.classList.toggle("hoja")
}


function pacman(){
    titulo.innerText = 'Pacman';
    figura.classList.toggle("pacman")
}







function moveTop(){
    titulo.innerText = 'Move Top';
    figura.classList.toggle("moveTop")
}


function panelateral(){
    titulo.innerText = 'Panel Lateral';
    const panel = document.querySelector(".panel-lateral");

    panel.classList.toggle("active");
}   


function luna(){
    titulo.innerText = 'Luna';
    figura.classList.toggle("luna");
}

function huevo(){
    titulo.innerText = 'Huevo';
    figura.classList.toggle("huevo");
}

function trapecio(){
    titulo.innerText = 'Trapecio';
    figura.classList.toggle("trapecio");
}

function moveLeft(){
    titulo.innerText = 'Mover hacia la izquierda';
    figura.classList.toggle("moveLeft");
}
function moveButtom(){
    titulo.innerText = 'Mover hacia abajo';
    figura.classList.toggle("moveButtom");
}

function moveRight(){
    titulo.innerText = 'Mover hacia la derecha';
    figura.classList.toggle("moveRight");
}

function panelSuperior(){
    titulo.innerText = 'Panel Superior';
    const panel = document.querySelector(".panel-superior");
    panel.classList.toggle("active");
}



function sorpresa() {
    // Cambia la URL a la del video de YouTube que desees
    window.location.href = "https://youtu.be/mCdA4bJAGGk"; // Reemplaza TU_CODE con el código del video
  }



  
function imgfondo(){
    titulo.innerText = 'Cambiar Fondo';
    figura.classList.toggle("backg");
}