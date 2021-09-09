import { correctSizeWindow, size, arrayFirstСoordinatesPencil, counterFrames } from "../../globalVariables.js";
import { lineEraser } from "./forEraserbresenhamLineAlgorithm.js";


export function eraser(i) {
	let can = document.getElementById(`canvas-${i - 1}`)
	let ctx = can.getContext("2d");
	function clearCanvas(evt) {
		if (document.querySelector(".clearTools").classList.contains("active") === true) {
			const rect = can.getBoundingClientRect();
			const x = (evt.clientX - rect.left) / correctSizeWindow;
			const y = (evt.clientY - rect.top) / correctSizeWindow;
			const sx = (Math.ceil(x / size) - 1) * size;
			const sy = (Math.ceil(y / size) - 1) * size;
			lineEraser(arrayFirstСoordinatesPencil[0], arrayFirstСoordinatesPencil[1], sx, sy, counterFrames);
			arrayFirstСoordinatesPencil[0] = sx;
			arrayFirstСoordinatesPencil[1] = sy;
		}
	}

	can.addEventListener("mousedown", evt => {
		if (document.querySelector(".clearTools").classList.contains("active") === true) {
			const rect = can.getBoundingClientRect();
			const x = (evt.clientX - rect.left) / correctSizeWindow;
			const y = (evt.clientY - rect.top) / correctSizeWindow;
			const sx = (Math.ceil(x / size) - 1) * size;
			const sy = (Math.ceil(y / size) - 1) * size;
			arrayFirstСoordinatesPencil[0] = sx;
			arrayFirstСoordinatesPencil[1] = sy;
		}
	},
		false
	);
	can.addEventListener("mousedown", () => {
		can.addEventListener("mousemove", clearCanvas, false);
	});
	can.addEventListener("mouseup", () => {
		can.removeEventListener("mousemove", clearCanvas, false);
	});
}
