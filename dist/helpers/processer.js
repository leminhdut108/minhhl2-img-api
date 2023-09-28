"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const imageProcessor = ({ imagePath, thumbPath, thumbWidth, thumbHeight }) => {
    return (0, sharp_1.default)(imagePath).resize(thumbWidth, thumbHeight).toFile(thumbPath);
};
exports.default = imageProcessor;
