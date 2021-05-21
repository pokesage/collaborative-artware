/* global io, background, image, loadImage, mouseX, mouseY, createCanvas */

// This file will basically create the user object and call the methods
window.p5Obj = new p5((p) => { 
    let desktops = []
    let rows, cols, xstep, ystep, user, desk

    p.preload = () => {

    }

    p.setup = () => {
        createCanvas(displayWidth, displayHeight)
        rows = 4
        cols = 5
        // Make new user instantiation
        /*
        user.connect
        */

    }

    p.draw = () => {
        /*
        user.movement()
        user.constrain()
        user.show()
        */
        fill(0)
        ellipse(50, 50, 50 , 50)
    }

})