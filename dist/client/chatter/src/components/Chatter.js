"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("@chakra-ui/react");
const CMessage_1 = __importDefault(require("./CMessage"));
const socket_io_client_1 = __importDefault(require("socket.io-client"));
exports.socket = socket_io_client_1.default('https://chatter-light.herokuapp.com/');
;
const Chatter = ({ name }) => {
    const [msg, setMsg] = react_1.useState("");
    const [messages, setMessages] = react_1.useState([]);
    react_1.useEffect(() => {
        exports.socket.on('message-recieved', data => {
            setMessages(old => [...old, { name: data.name, content: data.msg }]);
            setMsg(old => "");
        });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (msg.length) {
            exports.socket.emit('message-sent', { msg, name });
        }
    };
    return (react_1.default.createElement(react_2.VStack, { w: ["lg", "lg", "2xl"], h: ["lg", "lg", "2xl"], borderColor: "grey.900", borderWidth: "medium", borderRadius: "8px" },
        react_1.default.createElement(react_2.VStack, { overflowY: "auto", flex: "8", w: "100%" }, messages.map(message => react_1.default.createElement(CMessage_1.default, { name: message.name, content: message.content }))),
        react_1.default.createElement(react_2.HStack, { flex: "1", w: "100%", px: 4 },
            react_1.default.createElement("form", { onSubmit: handleSubmit, style: { width: "100%" } },
                react_1.default.createElement(react_2.HStack, { w: "100%" },
                    react_1.default.createElement(react_2.Input, { type: "text", variant: "filled", value: msg, onChange: e => setMsg(old => e.target.value) }),
                    react_1.default.createElement(react_2.Button, { colorScheme: "twitter", type: "submit" }, "Send"))))));
};
exports.default = Chatter;
