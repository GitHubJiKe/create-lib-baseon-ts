export function sayHello(name: string) {
    return `Hello ${name}`;
}

export function getFullName(firstName: string, lastName: string) {
    return `${lastName} ${firstName}`;
}

export default {
    sayHello,
    getFullName,
};
