const chatController = require("../Controller/chat.controller");
let userController = require("../Controller/user.controller");

module.exports = function (io) {
  // io.emit() -> 내보내는 기능
  // io.on() -> 들어주는 기능
  io.on("connection", async (socket) => {
    console.log("client is connected ", socket.id);

    socket.on("login", async (username, cb) => {
      try {
        const user = await userController.saveUser(username, socket.id);
        const welcomeMessage = {
          chat: `${user.name} is joined to this room`,
          user: { id: null, name: "system" },
        };
        io.emit("message", welcomeMessage);
        cb({ ok: true, data: user });
      } catch (e) {
        cb({ ok: false, error: e.message });
      }
    });

    socket.on("sendMessage", async (message, cb) => {
      // 유저 찾기
      try {
        const user = await userController.checkUser(socket.id);

        const newMessage = await chatController.saveChat(message, user);
        io.emit("message", newMessage);
        cb({ ok: true });
      } catch (e) {
        cb({ ok: false, error: e.message });
      }
    });

    socket.on("disconnect", () => {
      console.log("user 연결 종료");
    });
  });
};
