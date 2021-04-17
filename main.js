canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
c1_width = 100;
c1_height = 90;
c1_x = 10;
c1_y = 10;
c1_img = "car1.png";
c2_img = "car2.png";
c2_x = 10;
c2_y = 100;
c2_width= 100;
c2_height = 90;
bg_img = "racing.gif";


//variable declaration & end


function add() {
    background_imgTag = new Image();
    //defining a variable with a new image 
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable 
    background_imgTag.src = bg_img; // load image 
    c1_imgTag = new Image(); //defining a variable with a new image
    c1_imgTag.onload = uploadc1; // setting a function, onloading this variable 
    c1_imgTag.src = c1_img; // load image 

    c2_imgTag = new Image(); //defining a variable with a new image
    c2_imgTag.onload = uploadc2; // setting a function, onloading this variable 
    c2_imgTag.src = c2_img; // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadc1() {
    ctx.drawImage(c1_imgTag, c1_x, c1_y, c1_width, c1_height);
}

function uploadc2() {
    ctx.drawImage(c2_imgTag, c2_x, c2_y, c2_width, c2_height);
}
window.addEventListener("keydown", my_keydown);



function my_keydown(e) {
    keyPressed = e.keyCode; console.log(keyPressed);
    if (keyPressed == '38') {
        c1up();
        console.log("up");
    }
    if (keyPressed == '40') {
        c1down();
        console.log("down");
    } if (keyPressed == '37') {
        c1left();
        console.log("left");
    } if (keyPressed == '39') {
        c1right();
        console.log("right");
    }



    if (keyPressed == '87') {
        c2up();
        console.log("w");
    }
    if (keyPressed == '83') {
        c2down();
        console.log("s");
    } if (keyPressed == '65') {
        c2left();
        console.log("a");
    } if (keyPressed == '68') {
        c2right();
        console.log("d");
    }
}
/*function c1up() {
    if (c1_y >= 0) {
        c1_y = _c_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function c1down() {
    if (rover_y <= 510) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function c1left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function c1right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}*/
