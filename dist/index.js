"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.get('/', (request, response) => {
    response.status(200).send('Hello miau!');
});
app.listen(PORT, () => {
    console.log(`Console running on ${PORT}`);
    console.log(`Open http://localhost:${PORT}`);
});
