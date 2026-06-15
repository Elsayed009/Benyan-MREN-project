
const jwt = require("jsonwebtoken");
const socketAuthMiddleware = (socket, next) => {
  try {
    // get token
    const token = socket.handshake.headers.token;
    if (!token) return next(new Error("not ound Token"));
    // vrefiy token
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = payload.id;
    socket.role = payload.role;
    next();
  } catch (error) {
    return next(new Error("Invalid Token"));
  }
};

const chatSocketController = (io) => { // io you will create in the app.js file
  // Use Middleware
  io.use(socketAuthMiddleware);
  // Connection Socket.io
  io.on("connection", (socket) => {
    console.log(
      `User ${socket.userId} & Role ${socket.role} is Connection`,
    );



    // create room
    if(socket.role === "admin"){
      socket.join("room_admins");
    }else if(socket.role === "user") {
      socket.join(`room_${socket.userId}`)
    }
    // end room
    // first senario  
    socket.on('sendMsg', (data)=> {
      io.to("room_admins").emit("receivedUserMsg", { // advanced shortcut code // emit taks address and obj data
        msg: data.msg,
        user: socket.userId,
        role: socket.role,
        createdAt: new Date()
      });
    });

    socket.on('adminReply', (data) => {
      socket.join(`room_${data.toUserId}`); // mk it targetId
      // send msg to the spacific user
      io.to(`room_${data.toUserId}`).emit('receivedAdminMsg', {
        msg: data.msg,
        user: socket.userId,
        role: socket.role,
        createdAt: new Date()
      });
    
    });


  });
};

module.exports = chatSocketController;
