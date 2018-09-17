import Shape from "./shape";

class Rectangle extends Shape {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    rotate90Degrees(width, height) {
        this.height = width;
        this.width = height;
    }

    enlarge(additionalWidth, additionalHeight) {
        this.width += additionalWidth;
        this.height += additionalHeight;
    }

    shrink(additionalWidth, additionalHeight) {
        this.width -= additionalWidth;
        this.height -= additionalHeight;
    }

    isSquare() { return this.height === this.width }
}