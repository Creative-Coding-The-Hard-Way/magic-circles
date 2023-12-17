import P5 from "p5";
import sketch from "./magic_circle";

const root = document.getElementById("sketch_root")!;
const canvasSize = Math.min(root.clientWidth, root.clientHeight);
new P5((p5: P5) => sketch(p5, canvasSize), root);

export {};
