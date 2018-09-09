import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export default class HelloWorld {
    constructor(private name: string) {}

    public getMessage(): string {
        return `Hello ${this.name}!`;
    }
}

export class Push {
    method(): Observable<string> {
        return Observable.of('first', 'second', 'third', 'last');
    }
}