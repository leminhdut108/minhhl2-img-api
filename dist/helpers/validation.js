"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsValidator = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const paramsValidator = (fileName, thumbWidth, thumbHeight) => {
    if (!fileName || !thumbWidth || !thumbHeight) {
        throw new Error('Missing of params required, required params are: fileName, width, height');
    }
    const imagePath = path_1.default.resolve(`./public/assets/images/${fileName}.jpg`);
    if (!fs_1.default.existsSync(imagePath)) {
        throw new Error('invalid file name');
    }
    const thumbWidthNumber = parseInt(thumbWidth !== null && thumbWidth !== void 0 ? thumbWidth : '');
    const thumbHeightNumber = parseInt(thumbHeight !== null && thumbHeight !== void 0 ? thumbHeight : '');
    if (isNaN(thumbWidthNumber) ||
        isNaN(thumbHeightNumber) ||
        thumbWidthNumber <= 0 ||
        thumbHeightNumber <= 0) {
        throw new Error('Size params must be a valid number');
    }
};
exports.paramsValidator = paramsValidator;
