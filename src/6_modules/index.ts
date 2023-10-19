// this is called typed import to save from name clashed , here we imported Parabola but will use as MyParabola
import { Parabola as MyParabola } from "./parabola";
// this will import everything from shape and can use as MyShapes
import * as MyShapes from "./shape"

// * before this enable : "moduleResolution": "node"
export { Rectangle } from "./rectangle" //  way of importing and exporting from same line also called re-exporting
export { MyParabola, MyShapes }; // other way of exporting


// * now index.ts can act as single file in module that other have to use to access the classes and fuctions of this module.