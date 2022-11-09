import {_decorator, Component, Node, Tween, tween, Vec3} from 'cc';
import {BasePartical} from "db://assets/BasePartical";

const {ccclass, property} = _decorator;

@ccclass('Heart')
export class Heart extends BasePartical {
    size: number = 12;
    speed: number = 12;

    start() {
        console.log("Không biết lập trình web, chỉ biết lập trình game")
        console.log("Không thể yêu ai khác, bởi đã trót yêu em");
        console.log("T <3 V");
        console.log("Source: https://github.com/tiennm99/hurt/");
    }

    calcPosAt(time: number): Vec3 {
        let t = time * this.speed;
        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        return new Vec3(x * this.size, y * this.size, 0);
    }
}
