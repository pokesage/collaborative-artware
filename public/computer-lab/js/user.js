/* global createVector, loadImage, constrain, mouseX, mouseY, 
displayWidth, displayHeight, image, fill, textAlign, textSize, text */
let avatar
let ease = 0.07
/*
Fields:
  x: initial x-coordinate (0 as default)
  y: initial y-coordinate (0 as default)
  avatar: avatar image path (made at account creation)
  w: the width of the avatar image
  h: the height of the avatar image
  id: socket-id 
  display: display id (chosen at account creation)
  desk: the index of the desk assigned to the user at connection
  ^Not sure if I am missing a relevant field 
*/
class User {
    constructor(x, y, avatar, w, h, id, display, desk) {
        this.pos = createVector(x,y)
        this.width = w
        this.height = h
        this.id = id
        this.display = display
        this.avatar = avatar
        this.desk = desk
    }

    // Socket events : basically all the client side socket code goes here and main.js calls it
        // Connection : 
            // in the client side when a user connects we send user the relevant data
            // and in socket-api.js we take that data and broadcast it
            // then on the client side we listen for that data and update our view accordingly
        // Disconnect
            //
        // Movement

    // Updating user movement
    movement() {
        if (abs(mouseX - this.pos.x) > 0.1) {
            this.pos.x += (mouseX - this.pos.x) * ease
        }
                  
        if (abs(mouseY - this.pos.y) > 0.1) {
            this.pos.y += (mouseY - this.pos.y) * ease
        }
    }

    // Restrict the users movement to within the canvas
    constrain() {
        this.pos.x = constrain(this.pos.x, w, displayWidth - w)
        this.pos.y = constrain(this.pos.x, h, displayWidth - h)
    }

    // Draw the user's avatar and display id
    show() {
        // Show avatar
        avatar = loadImage(this.avatar)
        image(avatar, this.pos.x, this.pos.y)
        // Show display id
        fill(0)
        textAlign(CENTER)
        textSize(14) // something more responsive should be used here
        text(this.display, this.pos.x + avatar.width/2, this.pos.y + avatar.height)
    }
}