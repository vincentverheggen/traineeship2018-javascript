export default class Helloworld {
    constructor(name) {
        this.name = name;
    }

    getMessage() {
        return `Hello ${this.name}!`;
    }
}