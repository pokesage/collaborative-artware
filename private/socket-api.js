const userToSocketId = new Map()

module.exports = (socket, io) => {
  console.log(`user ${socket.id} has connected!`)
}

// COMPUTER LAB socket handling
socket.on('labConnect', (user) => {
    
    //send
    socket.broadcast.emit('labConnect', user)

    userToSocketId.set(user.id, socket.id)
    socket.userId = user.id
})

socket.on('labDisconnect', (user) => {
    userToSocketId.delete(socket.userId)
    socket.broadcast.emit('labDisconnect', socket.userId)
  
})

socket.on('labMouse', (user) => {
    //send
    socket.broadcast.emit('labMouse', user)
})

