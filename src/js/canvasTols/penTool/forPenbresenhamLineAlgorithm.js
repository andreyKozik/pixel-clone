
import { size, counterFrames } from "../../globalVariables.js";
import { miniCanvasFrame } from "../../miniCanvasFrame.js";


// Bresenham's line algorithm
/* eslint-disable no-param-reassign */
export function line(x0, y0, x1, y1, i) {
	let can = document.getElementById(`canvas-${i - 1}`)
	let ctx = can.getContext("2d");
	const dx = Math.abs(x1 - x0);
	const dy = Math.abs(y1 - y0);
	const sx = x0 < x1 ? 1 : -1;
	const sy = y0 < y1 ? 1 : -1;
	let err = dx - dy;

	for (;;) {
		if (x0 === x1 && y0 === y1) break;
		ctx.fillRect(x0, y0, size, size); 	
		const e2 = 2 * err;
		if (e2 > -dy) {
			err -= dy;
			x0 += sx;
		}
		if (e2 < dx) {
			err += dx;
			y0 += sy;
		}
	}
	localStorage.setItem("canvas", can.toDataURL());
	miniCanvasFrame(counterFrames)
}
/* eslint-disable no-param-reassign */

