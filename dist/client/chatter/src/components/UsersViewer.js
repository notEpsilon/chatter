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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_2 = require("@chakra-ui/react");
const Chatter_1 = require("./Chatter");
;
;
const UserViewer = ({ name }) => {
    const [renderNames, setRenderNames] = react_1.useState([]);
    react_1.useEffect(() => {
        Chatter_1.socket.on('new-user-entered-2', (personArr) => {
            setRenderNames(prev => personArr.map(person => person.name));
        });
        Chatter_1.socket.on("user-disconnected-2", (personArr) => {
            setRenderNames(prev => personArr.map(person => person.name));
        });
    }, []);
    react_1.useEffect(() => {
        Chatter_1.socket.emit('new-user-entered-1', name);
    }, [name]);
    return (react_1.default.createElement(react_2.VStack, { overflowY: "auto", divider: react_1.default.createElement(react_2.StackDivider, { borderColor: "grey.200" }), borderRadius: "8px", borderColor: "grey.900", borderWidth: "medium", h: ["lg", "lg", "2xl"], w: "2xs", mr: 2, px: "5px", py: "2px" },
        react_1.default.createElement(react_2.Heading, { textAlign: "center", whiteSpace: "nowrap", fontSize: ["lg", "2xl", "3xl"] }, "Online Users"),
        renderNames.map(nme => react_1.default.createElement(react_2.Text, null, nme))));
};
exports.default = UserViewer;
