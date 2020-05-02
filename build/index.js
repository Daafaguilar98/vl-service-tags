"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const database_1 = __importDefault(require("./src/database"));
const server_1 = __importDefault(require("./src/server"));
const http_1 = require("http");
const socket_1 = require("./src/socket");
const http = http_1.createServer(server_1.default);
socket_1.connect(http);
database_1.default.connect()
    .then(() => {
    console.log("DB is connected");
})
    .catch(err => {
    console.log("DB connection failed", err);
});
http.listen(server_1.default.get("PORT"), () => {
    console.log(`Server is running in port ${server_1.default.get("PORT")}`);
});
