import {_decorator, Component, Node, Tween, tween, Vec3} from 'cc';
import {BasePartical} from "db://assets/BasePartical";

const {ccclass, property} = _decorator;

@ccclass('T')
export class T extends BasePartical {
    size: number = 100;
    speed: number = 12;
    horizontalWeight: number = 1; //Tỉ lệ chiều ngang chữ T
    verticalWeight: number = 1; //Tỉ lệ chiều dọc chữ T
    verticalOrigin: number = 1; //Mốc thanh ngang T
    deltaX: number = -100;
    deltaY: number = -10;

    calcPosAt(time: number): Vec3 {
        let t = time * this.speed;
        let a = t % (this.horizontalWeight + this.verticalWeight);
        let isStep1 = a < this.horizontalWeight;
        let x, y;
        if (isStep1) {
            x = a - this.horizontalWeight / 2;
            y = this.verticalOrigin;
        } else {
            x = 0;
            y = this.verticalOrigin - (a - this.horizontalWeight);
        }
        return new Vec3(x * this.size + this.deltaX, y * this.size + this.deltaY, 0);
    }
}
