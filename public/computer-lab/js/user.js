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

    // Socket connections

    // Updating user movement
    movement() {
        if (abs(mouseX - this.pos.x) > 0.1) {
            this.pos.x += (mouseX - this.pos.x) * 0.07
        }
                  
        if (abs(mouseY - this.pos.y) > 0.1) {
            this.pos.y += (mouseY - this.pos.y) * 0.07
        }
    }

    // Restrict the users movement to within the canvas
    constrain() {
        this.pos.x = constrain(this.pos.x, w, displayWidth - w)
        this.pos.y = constrain(this.pos.x, h, displayWidth - h)
    }



}


// // set the easing factor 
// let easing = 0.07
// // radius of our circular avatar
// // we'll need a more responsive sizing solution when we have an actual image
// let r = 20

// // User object
// // x : initial x coord
// // y : initial y coord
// // id : str
// // displayName: str
// // avatar : path to an image 
// // 
// function User(x, y) {
//     randomSeed(23)
//     this.pos = createVector(x,y)
//     // let's give the user some random id
//     // we will use the display id in practice
//     this.id = `User: ${round(random(1000), 2)}`
//     // this.id = id;
    
//     // method for updating the location of the user's avatar
//     this.update = () => {
//       if (abs(mouseX - user.pos.x) > 0.1) {
//         user.pos.x += (mouseX - user.pos.x) * easing
//       }
      
//       if (abs(mouseY - user.pos.y) > 0.1) {
//         user.pos.y += (mouseY - user.pos.y) * easing
//       }
      
//     }
    
//     // method for binding the avatar to the canvas
//     this.constrain = () => {
//       user.pos.x = constrain(user.pos.x, r, (displayWidth/2) - r)
//       user.pos.y = constrain(user.pos.y, r, (displayHeight/2) - r)
//     }
    
//     // method for displaying the avatar along with its id
//     this.show = () => {
//       // show avatar (load the image of the avatar)
//       // we'll have to find some default size 
//       fill(0, 200, 0)
//       ellipse(user.pos.x, user.pos.y, r*2, r*2)
//       noStroke()
//       // show avatar id
//       fill(0)
//       textAlign(CENTER)
//       textSize(14)
//       text(user.id, user.pos.x, user.pos.y + r*1.5)
//     } 
//   }
  