import {Vec2D} from "main/util/Vec2D";
import {Box2D} from "../../main/util/Box2D";
export default {
  startingPoint: new Vec2D(-61.9, -28.7),
  box: [new Box2D([-1.0, -50.3], [9.3, 82.9]), new Box2D([-79.7, 14.7], [-50.5, 22.4]), new Box2D([-78.1, 64.2], [-49.1, 71.2]), new Box2D([43.5, 74.2], [110.9, 82.6]), new Box2D([76.7, -50.9], [146.9, 7.5]), new Box2D([75.5, -125.0], [145.7, -103.9]), new Box2D([-82.9, -125.0], [10.6, -103.9]), new Box2D([-200.0, -125.0], [-176.6, 125.0]), new Box2D([-86.8, -50.2], [-35.8, -41.6])],
  ground: [[new Vec2D(-1.0, 82.9), new Vec2D(9.3, 82.9)], [new Vec2D(-79.7, 22.4), new Vec2D(-50.5, 22.4)], [new Vec2D(-78.1, 71.2), new Vec2D(-49.1, 71.2)], [new Vec2D(43.5, 82.6), new Vec2D(110.9, 82.6)], [new Vec2D(76.7, 7.5), new Vec2D(146.9, 7.5)], [new Vec2D(75.5, -103.9), new Vec2D(145.7, -103.9)], [new Vec2D(-82.9, -103.9), new Vec2D(10.6, -103.9)], [new Vec2D(-200.0, 125.0), new Vec2D(-176.6, 125.0)], [new Vec2D(-86.8, -41.6), new Vec2D(-35.8, -41.6)]],
  ceiling: [[new Vec2D(-1.0, -50.3), new Vec2D(9.3, -50.3)], [new Vec2D(-79.7, 14.7), new Vec2D(-50.5, 14.7)], [new Vec2D(-78.1, 64.2), new Vec2D(-49.1, 64.2)], [new Vec2D(43.5, 74.2), new Vec2D(110.9, 74.2)], [new Vec2D(76.7, -50.9), new Vec2D(146.9, -50.9)], [new Vec2D(75.5, -125.0), new Vec2D(145.7, -125.0)], [new Vec2D(-82.9, -125.0), new Vec2D(10.6, -125.0)], [new Vec2D(-200.0, -125.0), new Vec2D(-176.6, -125.0)], [new Vec2D(-86.8, -50.2), new Vec2D(-35.8, -50.2)]],
  wallL: [[new Vec2D(-1.0, 82.9), new Vec2D(-1.0, -50.3)], [new Vec2D(-79.7, 22.4), new Vec2D(-79.7, 14.7)], [new Vec2D(-78.1, 71.2), new Vec2D(-78.1, 64.2)], [new Vec2D(43.5, 82.6), new Vec2D(43.5, 74.2)], [new Vec2D(76.7, 7.5), new Vec2D(76.7, -50.9)], [new Vec2D(75.5, -103.9), new Vec2D(75.5, -125.0)], [new Vec2D(-82.9, -103.9), new Vec2D(-82.9, -125.0)], [new Vec2D(-200.0, 125.0), new Vec2D(-200.0, -125.0)], [new Vec2D(-86.8, -41.6), new Vec2D(-86.8, -50.2)]],
  wallR: [[new Vec2D(9.3, 82.9), new Vec2D(9.3, -50.3)], [new Vec2D(-50.5, 22.4), new Vec2D(-50.5, 14.7)], [new Vec2D(-49.1, 71.2), new Vec2D(-49.1, 64.2)], [new Vec2D(110.9, 82.6), new Vec2D(110.9, 74.2)], [new Vec2D(146.9, 7.5), new Vec2D(146.9, -50.9)], [new Vec2D(145.7, -103.9), new Vec2D(145.7, -125.0)], [new Vec2D(10.6, -103.9), new Vec2D(10.6, -125.0)], [new Vec2D(-176.6, 125.0), new Vec2D(-176.6, -125.0)], [new Vec2D(-35.8, -41.6), new Vec2D(-35.8, -50.2)]],
  platform: [[new Vec2D(132.1, 42.9), new Vec2D(171.8, 42.9)], [new Vec2D(33.0, -29.4), new Vec2D(55.9, -29.4)], [new Vec2D(-137.2, -86.0), new Vec2D(-115.8, -86.0)], [new Vec2D(-176.3, -60.0), new Vec2D(-155.3, -60.0)], [new Vec2D(-133.9, 22.3), new Vec2D(-108.1, 22.3)], [new Vec2D(-20.9, -8.6), new Vec2D(-0.7, -8.6)], [new Vec2D(-19.4, 44.6), new Vec2D(-1.3, 44.6)], [new Vec2D(32.7, -69.7), new Vec2D(53.8, -69.7)]],
  ledge: [[4.0, 0.0], [4.0, 1.0], [5.0, 1.0], [5.0, 0.0], [6.0, 1.0], [6.0, 0.0], [0.0, 1.0], [0.0, 0.0], [3.0, 0.0], [3.0, 1.0], [1.0, 1.0], [1.0, 0.0], [2.0, 0.0], [2.0, 1.0], [8.0, 0.0], [8.0, 1.0]],
  target: [new Vec2D(-49.9, 38.8), new Vec2D(52.2, 98.5), new Vec2D(120.1, 55.7), new Vec2D(56.8, 1.3), new Vec2D(30.4, 11.8), new Vec2D(15.5, -82.8), new Vec2D(-81.1, -65.0), new Vec2D(-146.9, -26.7), new Vec2D(172.7, -106.9), new Vec2D(-104.5, 84.7)],
  scale: 3,
  blastzone: new Box2D([-250, -250], [250, 250]),
  offset: [600, 375]
};