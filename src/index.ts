import express, { Request, Response } from 'express';
import { createServer } from 'http';
import socketIO from 'socket.io';

const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 7070;

const io = new socketIO.Server(server, { cors: { origin: "http://localhost:3000" } });

type Person = { name: string, socketID: string };

let users: Person[] = [];

interface RMessage {
    msg: string;
    name: string;
};

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/chatter/build'));
}

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>Hello To App</h1>");
});

io.on('connection', socket => {
    console.log('- new connection established');
    socket.on('new-user-entered-1', name => {
        users.push({ name, socketID: socket.id });
        io.emit('new-user-entered-2', users);
    });
    socket.on('message-sent', (data: RMessage) => {
        io.emit('message-recieved', { msg: data.msg, name: data.name });
    });
    socket.on("disconnect", reason => {
        users = users.filter(user => user.socketID !== socket.id);
        io.emit("user-disconnected-2", users);
    });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
