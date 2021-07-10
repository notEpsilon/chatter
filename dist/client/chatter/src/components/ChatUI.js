"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const Chatter_1 = __importDefault(require("./Chatter"));
const UsersViewer_1 = __importDefault(require("./UsersViewer"));
;
const ChatUI = ({ name }) => {
    return (react_1.default.createElement(react_2.Center, { w: "100vw", h: "100vh", padding: 4 },
        react_1.default.createElement(UsersViewer_1.default, { name: name }),
        react_1.default.createElement(Chatter_1.default, { name: name })));
};
exports.default = ChatUI;
