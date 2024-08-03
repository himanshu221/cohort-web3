"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const input = "himanshu";
let nounce = 0;
const mine = (input) => {
    while (1) {
        const hash = crypto_1.default.createHash('SHA256').update(input + nounce).digest('hex');
        if (hash.startsWith("00000")) {
            return {
                nounce,
                hash
            };
        }
        nounce++;
    }
};
const out = mine("harkirat => Raman | Rs 100 and Ram => Ankit | Rs 10");
console.log(out);
