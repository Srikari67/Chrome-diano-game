const canvas = document.getElementById("game");
const context = canvas.getContext("2d")

const GAME_WIDTH = 800;
const GAME_HEIGHT = 200;

let scaleRatio = null;

function setScreen(){
    scaleRatio = getScaleRatio();
    canvas.width = GAME_WIDTH * scaleRatio;
    canvas.height = GAME_HEIGHT * scaleRatio;
}

setScreen();
window.addEventListener("resize",()=>setTimeout(setScreen,500));

if(screen.orientation){
    screen.orientation.addEventListener("change",setScreen);
}
function getScaleRatio(){
    const screenHeight = Math.min(window.innerHeight,document.documentElement.clientHeight);
    const screenWidth = Math.min(window.innerWidth,document.documentElement.clientWidth);

    if (screenWidth / screenHeight < GAME_WIDTH / GAME_HEIGHT){
        return screenWidth / screenHeight;
    }
    else{
        return GAME_WIDTH / GAME_HEIGHT;
    }
}

function gameLoop(){
 console.log("gameloop");
 requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);