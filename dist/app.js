"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imagesRoute_1 = __importDefault(require("./routes/images/imagesRoute"));
const app = (0, express_1.default)();
app.use('/api', imagesRoute_1.default);
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
exports.default = app;
