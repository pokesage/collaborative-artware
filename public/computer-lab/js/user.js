// set the easing factor 
let easing = 0.07
// radius of our circular avatar
// we'll need a more responsive sizing solution when we have an actual image
let r = 20

// User object
// x : initial x coord
// y : initial y coord
// id : str
// displayName: str
// avatar : path to an image 
// 
function User(x, y) {
    randomSeed(23)
    this.pos = createVector(x,y)
    // let's give the user some random id
    // we will use the display id in practice
    this.id = `User: ${round(random(1000), 2)}`
    // this.id = id;
    
    // method for updating the location of the user's avatar
    this.update = () => {
      if (abs(mouseX - user.pos.x) > 0.1) {
        user.pos.x += (mouseX - user.pos.x) * easing
      }
      
      if (abs(mouseY - user.pos.y) > 0.1) {
        user.pos.y += (mouseY - user.pos.y) * easing
      }
      
    }
    
    // method for binding the avatar to the canvas
    this.constrain = () => {
      user.pos.x = constrain(user.pos.x, r, (displayWidth/2) - r)
      user.pos.y = constrain(user.pos.y, r, (displayHeight/2) - r)
    }
    
    // method for displaying the avatar along with its id
    this.show = () => {
      // show avatar (load the image of the avatar)
      // we'll have to find some default size 
      fill(0, 200, 0)
      ellipse(user.pos.x, user.pos.y, r*2, r*2)
      noStroke()
      // show avatar id
      fill(0)
      textAlign(CENTER)
      textSize(14)
      text(user.id, user.pos.x, user.pos.y + r*1.5)
    } 
  }
  