export function sayHello(name: string) {
    return `Hello ${name}`;
}

export function getFullName(firstName: string, lastName: string) {
    return `${lastName} ${firstName}`;
}

export function helloGulp() {
    return "Hello Gulp!!";
}

export default {
    sayHello,
    getFullName,
    helloGulp,
};
