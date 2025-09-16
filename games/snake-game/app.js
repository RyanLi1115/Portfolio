const canvas = document.getElementById('myCanvas');
// get the context of the canvas
// context is the place where we can draw on the canvas
// 2d is the type of context we are using
const ctx = canvas.getContext('2d');

// unit is the size of the snake
// rows is the number of rows in the canvas
// columns is the number of columns in the canvas
const unit = 20;
const rows = canvas.height / unit;  // 500 / 20 = 25
const columns = canvas.width / unit;  // 500 / 20 = 25

// snake is an array of objects
// each object has a x and y property and each object is a part of the snake
let snake = [];
snake[0] = {
    x: 80,
    y: 0
}
snake[1] = {
    x: 60,
    y: 0
}
snake[2] = {
    x: 40,
    y: 0
}
snake[3] = {
    x: 20,
    y: 0
}

// food is an object
// it has a x and y property
class Food{
    constructor(){
        // use pickLocation to ensure food doesn't spawn on snake
        this.x = 0;
        this.y = 0;
        this.pickLocation();
    }

    drawFood(){
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, unit, unit);
    }

    checkOverlap(x, y){
        // check if the food is on the snake
        for(let i = 0; i < snake.length; i++){
            if(snake[i].x === x && snake[i].y === y){
                return true;
            }
        }
        return false;
    }

    pickLocation(){
        // the location should not be on the snake
        let overlap = false;
        let new_x;
        let new_y;
        let attempts = 0;
        const maxAttempts = 100; // prevent infinite loop
        
        do {
            new_x = Math.floor(Math.random() * columns) * unit;
            new_y = Math.floor(Math.random() * rows) * unit;
            overlap = this.checkOverlap(new_x, new_y);
            attempts++;
            
            // if we can't find a free spot after many attempts, 
            // just place it anywhere (game is probably almost over)
            if(attempts >= maxAttempts) {
                console.log('Warning: Could not find free spot for food after', maxAttempts, 'attempts');
                break;
            }
        } while(overlap);
        
        this.x = new_x;
        this.y = new_y;
    }
}
let food = new Food();
let score = 0;

// highest score functionality
let highestScore = localStorage.getItem('snakeHighestScore') || 0;

// difficulty settings
let currentDifficulty = 'easy';
let gameSpeed = 150; // default easy speed

// event listener for the arrow keys
// note: if the snake is moving in the opposite direction of the arrow key, then the snake will not move
window.addEventListener('keydown', event => {
    if(event.key == 'ArrowUp' && d != 'Down') { d = 'Up'; console.log('ArrowUp'); }
    if(event.key == 'ArrowDown' && d != 'Up') { d = 'Down'; console.log('ArrowDown'); }
    if(event.key == 'ArrowLeft' && d != 'Right') { d = 'Left'; console.log('ArrowLeft'); }
    if(event.key == 'ArrowRight' && d != 'Left') { d = 'Right'; console.log('ArrowRight'); }
});

// define the direction of the snake
let d = 'Right';

// draw the game
function drawGame(){    
    console.log('drawGame started');

    // fill the canvas with black
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the food
    food.drawFood();

    // draw the snake
    for(let i = 0; i < snake.length; i++){
        // if the current index is 0, then the snake is the head
        // and we want to make it blue
        // otherwise, we want to make it lightgrey
        if(i === 0){
            ctx.fillStyle = 'blue';
        }else{
            ctx.fillStyle = 'lightgrey';
        }
        ctx.strokeStyle = 'white';

        // fillRect is a method that fills a rectangle with a given color
        ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
        // strokeRect is a method that draws a rectangle with a given color
        ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
    }

    // d is the direction of the snake
    // according d to move the snake
    // note: snake[0] is the head of the snake, snakeX is a number.
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(d == "Left") snakeX -= unit;
    if(d == "Right") snakeX += unit;
    if(d == "Up") snakeY -= unit;
    if(d == "Down") snakeY += unit;
    
    // handle boundary wrapping for the new head position
    if(snakeX < 0) snakeX = canvas.width - unit;
    if(snakeX >= canvas.width) snakeX = 0;
    if(snakeY < 0) snakeY = canvas.height - unit;
    if(snakeY >= canvas.height) snakeY = 0;
    
    // add the new head to the snake first
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);

    // check if snake hits itself (self-collision)
    for(let i = 1; i < snake.length; i++){
        if(snakeX === snake[i].x && snakeY === snake[i].y){
            gameOver();
            return;
        }
    }

    // judge if the snake is eating the food
    const isEating = snakeX === food.x && snakeY === food.y;
    console.log('Snake head:', snakeX, snakeY, 'Food:', food.x, food.y, 'Match:', isEating);
    if(isEating){
        console.log('Food eaten!');
        const oldFoodX = food.x;
        const oldFoodY = food.y;
        food.pickLocation(); 
        console.log('Food moved from:', oldFoodX, oldFoodY, 'to:', food.x, food.y);
        // update the score
        score++;
        document.getElementById('myScore').innerHTML = 'current score: ' + score;
    }
    else{
        // if the snake is not eating the food, then remove the last part of the snake
        snake.pop();
    }
    console.log('snake.length', snake.length);

}

// 创建自定义模态框
function showGameOverModal(message) {
    // 创建模态框背景
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    // 创建模态框内容
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background-color: #1a1a1a;
        border: 3px solid green;
        border-radius: 10px;
        padding: 30px;
        text-align: center;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
        max-width: 400px;
        width: 90%;
    `;
    
    modalContent.innerHTML = `
        <div style="margin-bottom: 20px;">${message}</div>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background-color: green; color: white; border: none; 
                       padding: 10px 20px; font-size: 18px; border-radius: 5px; 
                       cursor: pointer; font-family: 'Poppins', sans-serif;">
            OK
        </button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// game over function
function gameOver(){
    clearInterval(myGameInterval);
    
    // reset snake to initial state immediately
    snake = [];
    snake[0] = { x: 80, y: 0 };
    snake[1] = { x: 60, y: 0 };
    snake[2] = { x: 40, y: 0 };
    snake[3] = { x: 20, y: 0 };
    
    // reset direction
    d = 'Right';
    
    console.log('Game Over - Snake reset to initial length:', snake.length);
    
    // check if current score is higher than highest score
    if(score > highestScore){
        highestScore = score;
        localStorage.setItem('snakeHighestScore', highestScore);
        document.getElementById('myHighestScore').innerHTML = 'highest score: ' + highestScore;
        showGameOverModal('Game Over!<br>New High Score: ' + score + '!');
    } else {
        showGameOverModal('Game Over!<br>Your score: ' + score);
    }
}

// restart game function
function restartGame(){
    // clear the current game interval
    clearInterval(myGameInterval);
    
    // reset snake to initial state (if not already reset by gameOver)
    if(snake.length > 4) {
        snake = [];
        snake[0] = { x: 80, y: 0 };
        snake[1] = { x: 60, y: 0 };
        snake[2] = { x: 40, y: 0 };
        snake[3] = { x: 20, y: 0 };
        console.log('Snake reset to initial length:', snake.length);
    }
    
    // reset direction
    d = 'Right';
    
    // reset score
    score = 0;
    document.getElementById('myScore').innerHTML = 'current score: ' + score;
    
    // ensure highest score is still displayed
    document.getElementById('myHighestScore').innerHTML = 'highest score: ' + highestScore;
    
    // create new food
    food = new Food();
    
    // start new game with current difficulty
    myGameInterval = setInterval(drawGame, gameSpeed);
}

// difficulty selection functions
function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    
    // set game speed based on difficulty
    switch(difficulty) {
        case 'easy':
            gameSpeed = 150;
            break;
        case 'medium':
            gameSpeed = 100;
            break;
        case 'hard':
            gameSpeed = 50;
            break;
    }
    
    // hide difficulty menu and show game
    document.getElementById('difficultyMenu').style.display = 'none';
    document.getElementById('myCanvas').style.display = 'block';
    document.getElementById('gameControls').style.display = 'block';
    
    // update difficulty display
    document.getElementById('currentDifficulty').innerHTML = 'Difficulty: ' + 
        difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    
    // start the game
    startGame();
}

function showDifficultyMenu() {
    // stop current game
    clearInterval(myGameInterval);
    
    // hide game and show difficulty menu
    document.getElementById('myCanvas').style.display = 'none';
    document.getElementById('gameControls').style.display = 'none';
    document.getElementById('difficultyMenu').style.display = 'block';
}

function startGame() {
    // initialize displays
    document.getElementById('myHighestScore').innerHTML = 'highest score: ' + highestScore;
    document.getElementById('myScore').innerHTML = 'current score: ' + score;
    
    // start the game with selected speed
    myGameInterval = setInterval(drawGame, gameSpeed);
}

// initialize the game
function initGame(){
    // show difficulty menu first
    document.getElementById('difficultyMenu').style.display = 'block';
}

// make the snake move
// 100 is the time in milliseconds between each frame
let myGameInterval;

// start the game when DOM is loaded
window.addEventListener('DOMContentLoaded', initGame);




