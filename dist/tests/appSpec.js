"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const request = (0, supertest_1.default)(app_1.default);
it('test the api endpoint to be success santanmonica', (done) => {
    // const response = request.get('/api/images/?fileName=santamonica&width=500&height=500');
    request
        .get('/api/images/?fileName=santamonica&width=500&height=500')
        .then((response) => {
        expect(response.status).toBe(200);
    });
    done();
});
