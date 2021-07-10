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
const react_1 = require("@chakra-ui/react");
const react_2 = __importStar(require("react"));
const HomeForm_1 = __importDefault(require("./components/HomeForm"));
const ChatUI_1 = __importDefault(require("./components/ChatUI"));
;
const App = () => {
    const [user, setUser] = react_2.useState({ name: "", state: false });
    return (react_2.default.createElement(react_1.Center, { h: "100vh", w: "100vw" }, user.state && user.name.length ? react_2.default.createElement(ChatUI_1.default, { name: user.name }) : react_2.default.createElement(HomeForm_1.default, { userSetter: setUser })));
};
exports.default = App;
