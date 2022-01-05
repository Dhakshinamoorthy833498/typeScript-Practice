"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
let mycustomer = new customer_1.Customer("martin", "dixon");
console.log(`My name is ${mycustomer.firstName} ${mycustomer.lastName}`);
