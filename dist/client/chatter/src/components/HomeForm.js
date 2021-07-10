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
const HomeForm = ({ userSetter }) => {
    const [name, setName] = react_1.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        userSetter(prevState => ({ name, state: true }));
    };
    const handleChange = (e) => setName(prevName => e.target.value);
    return (react_1.default.createElement(react_2.VStack, { boxSize: "sm", borderColor: "grey.900", borderWidth: "3.2px", borderRadius: "8px", px: 8, py: 14 },
        react_1.default.createElement(react_2.Box, { mb: "50px" },
            react_1.default.createElement(react_2.Heading, { letterSpacing: "1px", color: "blackAlpha.800" }, "Login")),
        react_1.default.createElement(react_2.Box, { width: "80%" },
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement(react_2.FormControl, null,
                    react_1.default.createElement(react_2.Input, { placeholder: "Name", variant: "filled", value: name, onChange: handleChange }),
                    react_1.default.createElement(react_2.FormHelperText, null, "this will be your display name"))))));
};
exports.default = HomeForm;
