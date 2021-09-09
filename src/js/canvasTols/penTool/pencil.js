import { correctSizeWindow, size, arrayFirstСoordinatesPencil, counterFrames } from "../../globalVariables.js";
import { line } from "./forPenbresenhamLineAlgorithm.js";

export function pencil(i) {
	let can = document.getElementById(`canvas-${i - 1}`)
	let ctx = can.getContext("2d");
	function drawCanvas(evt) {
		if (evt.which === 1) {
			const outputColor = document.getElementById("input");
			ctx.fillStyle = outputColor.value;
		} else if (evt.which === 3) {
			const outputPrevColor = document.getElementById("input_prev");
			ctx.fillStyle = outputPrevColor.value;
		}
		if (document.querySelector(".pencil").classList.contains("active") === true) {
			const rect = can.getBoundingClientRect();
			const x = (evt.clientX - rect.left) / correctSizeWindow;
			const y = (evt.clientY - rect.top) / correctSizeWindow;
			const sx = (Math.ceil(x / size) - 1) * size;
			const sy = (Math.ceil(y / size) - 1) * size;
			line(arrayFirstСoordinatesPencil[0], arrayFirstСoordinatesPencil[1], sx, sy, counterFrames);
			arrayFirstСoordinatesPencil[0] = sx;
			arrayFirstСoordinatesPencil[1] = sy;
		}
	}

		can.addEventListener("mousedown", evt => {
			if (evt.which === 1) {
				const outputColor = document.getElementById("input");
				ctx.fillStyle = outputColor.value;
			} else if (evt.which === 3) {
				const outputPrevColor = document.getElementById("input_prev");
				ctx.fillStyle = outputPrevColor.value;
			}
			if (document.querySelector(".pencil").classList.contains("active") === true) {
				const rect = can.getBoundingClientRect();
				const x = (evt.clientX - rect.left) / correctSizeWindow;
				const y = (evt.clientY - rect.top) / correctSizeWindow;
				const sx = (Math.ceil(x / size) - 1) * size;
				const sy = (Math.ceil(y / size) - 1) * size;
				arrayFirstСoordinatesPencil[0] = sx;
				arrayFirstСoordinatesPencil[1] = sy;
				ctx.fillRect(sx, sy, size, size);
			}
		}, false);
		can.addEventListener("mousedown", () => {
			can.addEventListener("mousemove", drawCanvas, false);

		});
		can.addEventListener("mouseup", () => {
			can.removeEventListener("mousemove", drawCanvas, false);
		});
	}
