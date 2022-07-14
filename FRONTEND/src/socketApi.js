import io from "socket.io-client";
let socket;
export const init = () => {
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log("sunucuya bağlanıldı"));
};

export const send = (color) => {
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    cb(color);
  });
};
