import {_decorator, Component, Node, Tween, tween, Vec3} from 'cc';

const {ccclass, property} = _decorator;

@ccclass('BasePartical')
export class BasePartical extends Component {
    time: number = 0;

    start() {
    }

    calcPosAt(time: number): Vec3 {
        return new Vec3(0, 0, 0);
    }

    update(deltaTime: number) {
        this.time += deltaTime;
        this.node.position = this.calcPosAt(this.time);
    }
}
