// Абстракція для геометричних фігур, яка задає основні характеристики, але залишає конкретну реалізацію підкласам

abstract class Shape {
    public abstract getArea(): number;
}

class Rectangle extends Shape {
    public constructor(private width: number, private height: number) {
        super();
    }
    public getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    public constructor(side: number) {
        super(side, side);
    }
}

export { Shape, Rectangle, Square };
