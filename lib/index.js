"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullName = exports.sayHello = void 0;
function sayHello(name) {
    return "Hello " + name;
}
exports.sayHello = sayHello;
function getFullName(firstName, lastName) {
    return lastName + " " + firstName;
}
exports.getFullName = getFullName;
exports.default = {
    sayHello: sayHello,
    getFullName: getFullName,
};
//# sourceMappingURL=index.js.map