let leftPosition = document.getElementById("leftposition");
let rightPosition = document.getElementById("rightposition");
let ball = document.getElementById("ball");

console.log(leftPosition);
console.log(rightPosition);
console.log(ball);


function moveRight() {
ball.style.display = "block";
ball.style.animationName = "slideRight";
ball.style.animationDuration = "2s";
ball.style.animationTimingFunction = "ease";
ball.style.animationIterationCount = "1";
ball.style.animationFillMode = "forwards";
ball.style.zIndex = "100";

}

function moveLeft() {
    ball.style.display = "block";
    ball.style.animationName = "slideLeft";
    ball.style.animationDuration = "2s";
    ball.style.animationTimingFunction = "ease";
    ball.style.animationIterationCount = "1";
    ball.style.animationFillMode = "forwards";
    ball.style.zIndex = "100";
}

leftPosition.addEventListener("click", moveLeft);
rightPosition.addEventListener("click", moveRight);