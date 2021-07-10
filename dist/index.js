"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = __importDefault(require("socket.io"));
const app = express_1.default();
const server = http_1.createServer(app);
const io = new socket_io_1.default.Server(server, { cors: { origin: "http://localhost:3000" } });
let users = [];
;
io.on('connection', socket => {
    console.log('- new connection established');
    socket.on('new-user-entered-1', name => {
        users.push({ name, socketID: socket.id });
        io.emit('new-user-entered-2', users);
    });
    socket.on('message-sent', (data) => {
        io.emit('message-recieved', { msg: data.msg, name: data.name });
    });
    socket.on("disconnect", reason => {
        users = users.filter(user => user.socketID !== socket.id);
        io.emit("user-disconnected-2", users);
    });
});
const PORT = process.env.PORT || 7070;
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static('../../client/chatter/build'));
}
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
