"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var route = express_1.default.Router();
route.post('', function (req, res) {
    res.send('Hello World!');
});
module.exports = route;
