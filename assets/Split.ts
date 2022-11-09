import {_decorator, Component, Node, Tween, tween, Vec3} from 'cc';
import {BasePartical} from "db://assets/BasePartical";

const {ccclass, property} = _decorator;

@ccclass('Split')
export class Split extends BasePartical {
    size: number = 70;
    speed: number = 6;

    deltaX: number = 0;
    deltaY: number = -30;

    calcPosAt(time: number): Vec3 {
        let t = time * this.speed;
        let a = t % 5;
        let x, y;
        if (a < 1) {
            x = -a / 2;
            y = 2 - a;
        } else if (a < 2) {
            a -= 1;
            x = -1 / 2 + a;
            y = 1;
        } else if (a < 3) {
            a -= 2;
            x = 1 / 2 - a;
            y = 1 - 2 * a;
        } else if (a < 4) {
            a -= 3;
            x = -1 / 2 + a;
            y = -1;
        } else {
            a -= 4;
            x = (1 - a) / 2;
            y = -1 - a;
        }
        return new Vec3(x * this.size + this.deltaX, y * this.size + this.deltaY, 0);
    }
}
