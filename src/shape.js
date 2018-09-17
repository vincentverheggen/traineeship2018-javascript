export default class Shape {
    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    get getColor() { return this.color }
    set changeColor(color) { this.color = color }

}

// TODO 9 think of 3 other types of shapes and extend from the correct super class

// TODO 10 think of new methods you can add to the shapes we created (at least 2)