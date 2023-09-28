"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../helpers/validation");
it('expect paramsValidator("filename", "100", "a") to throw error', () => {
    expect(function () {
        (0, validation_1.paramsValidator)('santamonica', '100', 'a');
    }).toThrow(new Error('Size params must be a valid number'));
});
