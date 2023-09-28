"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const processer_1 = __importDefault(require("../../helpers/processer"));
const validation_1 = require("../../helpers/validation");
const imagesRouter = express_1.default.Router();
imagesRouter.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryParams = req.query;
    const { fileName, width: thumbWidthStr, height: thumbHeightStr } = queryParams;
    try {
        (0, validation_1.paramsValidator)(fileName, thumbWidthStr, thumbHeightStr);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).send(error.message);
        }
        return res.status(400).send('invalid params');
    }
    const thumbWidthNumber = parseInt(thumbWidthStr);
    const thumbHeightNumber = parseInt(thumbHeightStr);
    const imagePath = path_1.default.resolve(`./public/assets/images/${fileName}.jpg`);
    const thumbPath = path_1.default.resolve(`./public/assets/thumbs/${fileName}-w${thumbWidthNumber}-h${thumbHeightNumber}.jpg`);
    console.log('imagePath', imagePath);
    if (fs_1.default.existsSync(thumbPath)) {
        return res.sendFile(thumbPath);
    }
    else {
        try {
            yield (0, processer_1.default)({
                imagePath,
                thumbPath,
                thumbWidth: thumbWidthNumber,
                thumbHeight: thumbHeightNumber
            });
            return res.sendFile(thumbPath);
        }
        catch (error) {
            return res.status(500).send('Image Processing Error');
        }
    }
}));
exports.default = imagesRouter;
