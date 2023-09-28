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
const path_1 = __importDefault(require("path"));
const processer_1 = __importDefault(require("../helpers/processer"));
it('expect imageProcessor not throw any error', () => {
    expect(() => __awaiter(void 0, void 0, void 0, function* () {
        const imagePath = path_1.default.resolve(`./public/assets/images/santamonica.jpg`);
        const thumbPath = path_1.default.resolve(`./public/assets/thumbs/santamonica-w400-h400.jpg`);
        yield (0, processer_1.default)({
            imagePath,
            thumbPath,
            thumbWidth: 400,
            thumbHeight: 400,
        });
    })).not.toThrow();
});
