const mydiv = document.getElementById('mydiv');

const screenWidth = window.innerWidth;
const divWidth = 50;

const speed = 5;

let moveRight = true;

function moveDiv(){
    const currentPositionX = parseInt(mydiv.style.left) || 0;

    if (currentPositionX < 0 || currentPositionX > screenWidth - divWidth){
        moveRight = !moveRight;
    }
    const newPositionX = currentPositionX + (moveRight ? speed : -speed);
    mydiv.style.left = newPositionX + 'px';
}

const intervalId = setInterval(moveDiv, 16);


  function changecolor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

// using inline variable
      document.getElementById("mydiv").style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
  
  }