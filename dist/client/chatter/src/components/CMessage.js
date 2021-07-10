"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
;
const CMessage = ({ name, content }) => {
    return (react_1.default.createElement(react_2.VStack, { h: "auto", w: "98%", mx: "auto", my: 1, bgColor: "#edf2f9", borderRadius: "8px", py: 1.5, px: 2 },
        react_1.default.createElement(react_2.Text, { alignSelf: "flex-start", bgColor: "rgb(0, 132, 255)", color: "white", borderRadius: "9999px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", pb: "3px", px: 5 }, name),
        react_1.default.createElement(react_2.Text, { pl: "5px", alignSelf: "flex-start", color: "black" }, content)));
};
exports.default = CMessage;
