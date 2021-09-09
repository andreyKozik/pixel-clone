import { can, ctx, ctxMini, changeCanvasSize, size32X32, size64X64, size128X128} from './globalVariables.js';

export function miniCanvasFrame(i) {
	let canMini = document.getElementById(`canvas-mini-${i - 1}`)
	let ctxMini = canMini.getContext("2d");
	let can = document.getElementById(`canvas-${i - 1}`)
	let ctx = can.getContext("2d");
	const data = ctx.getImageData(0, 0, can.width, can.height);
	ctxMini.putImageData(data, 0, 0, 0, 0, 128, 128);
}

