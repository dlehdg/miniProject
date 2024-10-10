module.exports = function (io) {
  // io.emit() -> 내보내는 기능
  // io.on() -> 들어주는 기능
  io.on("connection", async(socket) => {
    console.log("client is connected ", socket.id);

    socket.on("disconnect", () => {
      console.log("user 연결 종료");
    })
  });

  
}