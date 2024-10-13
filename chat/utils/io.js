let userController = require("../Controller/user.controller");

module.exports = function (io) {
  // io.emit() -> 내보내는 기능
  // io.on() -> 들어주는 기능
  io.on("connection", async (socket) => {
    console.log("client is connected ", socket.id);

    socket.on("login", async (username, cb) => {
      try {
        const user = await userController.saveUser(username, socket.id);
        cb({ ok: true, data: user });
      } catch (e) {
        cb({ ok: false, error: e.message });
      }
    });

    socket.on("disconnect", () => {
      console.log("user 연결 종료");
    });
  });
};
