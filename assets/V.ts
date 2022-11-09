import {_decorator, Component, Node, Tween, tween, Vec3} from 'cc';
import {BasePartical} from "db://assets/BasePartical";

const {ccclass, property} = _decorator;

@ccclass('V')
export class V extends BasePartical {
    size: number = 60;
    speed: number = 12;
    alphaInDegree: number = 60; //Góc chữ V

    alpha = this.alphaInDegree / 2 * Math.PI / 180; //Góc ở radian
    deltaX: number = 100;
    deltaY: number = -10;

    calcPosAt(time: number): Vec3 {
        let t = time * this.speed;
        let a = t % 2;
        let x = Math.abs(a - 1);
        let y = x / Math.tan(this.alpha);
        if (a < 1) x *= -1;
        return new Vec3(x * this.size + this.deltaX, y * this.size + this.deltaY, 0);
    }
}
