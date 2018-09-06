export default class HelloWorld {
    constructor(private name: string) {}

    public getMessage(): string {
        return `Hello ${this.name}!`;
    }
}