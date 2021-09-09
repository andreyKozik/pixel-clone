import { can, ctx, correctSizeWindow, size, objContexts, counterFrames } from '../../globalVariables.js';
import { miniCanvasFrame } from "../../miniCanvasFrame.js"

// create fill algorithm
export function fillAlgorithm(i) {
	let can = document.getElementById(`canvas-${i - 1}`)
	let ctx = can.getContext("2d");
	can.addEventListener("mousedown", evt => {
		if (evt.which === 1) {
			const outputColor = document.getElementById("input");
			ctx.fillStyle = outputColor.value;
		} else if (evt.which === 3) {
			const outputPrevColor = document.getElementById("input_prev");
			ctx.fillStyle = outputPrevColor.value;
		}
		const hexRgba = hex => {
			const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
			return [r, g, b];
		};
		const rgb = hexRgba(ctx.fillStyle);

		if (
			document.querySelector(".paint-bucket").classList.contains("active") ===
			true
		) {
			const rect = can.getBoundingClientRect();
			let x = (evt.clientX - rect.left) / correctSizeWindow;
			let y = (evt.clientY - rect.top) / correctSizeWindow;
			const sx = (Math.ceil(x / size) - 1) * size;
			const sy = (Math.ceil(y / size) - 1) * size;
			const date = ctx.getImageData(0, 0, can.width, can.height);
			const dateOne = ctx.getImageData(sx, sy, size, size).data;
			const pixelStack = [[sx, sy]];
			let pixelPop = [];

			// checking for the same color
			if (dateOne[0] === rgb[0] && dateOne[1] === rgb[1] && dateOne[2] === rgb[2])
				return undefined;

			const matchStartColor = function matchStartColor(pixelPos) {
				const r = date.data[pixelPos];
				const g = date.data[pixelPos + 1];
				const b = date.data[pixelPos + 2];
				return r === dateOne[0] && g === dateOne[1] && b === dateOne[2];
			};

			const colorPixel = function colorPixel(pixelPos) {
				date.data[pixelPos] = rgb[0];
				date.data[pixelPos + 1] = rgb[1];
				date.data[pixelPos + 2] = rgb[2];
				date.data[pixelPos + 3] = 255;
			};

			// road up with pixel check
			while (pixelStack.length) {
				pixelPop = pixelStack.pop();
				x = pixelPop[0];
				y = pixelPop[1];
				let pixelPos = (y * can.width + x) * 4;

				while (y-- >= 0 && matchStartColor(pixelPos)) {
					pixelPos -= can.width * 4;
				}

				let reachLeft = false;
				let reachRight = false;
				pixelPos += can.width * 4;
				++y;

				// neighboring pixel check
				while (y++ < can.height && matchStartColor(pixelPos)) {
					colorPixel(pixelPos);

					if (x > 0) {
						if (matchStartColor(pixelPos - 4)) {
							if (!reachLeft) {
								pixelStack.push([x - 1, y]);
								reachLeft = true;
							} else if (reachLeft) {
								reachLeft = false;
							}
						}
					}
					if (x < can.width - 1) {
						if (matchStartColor(pixelPos + 4)) {
							if (!reachRight) {
								pixelStack.push([x + 1, y]);
								reachRight = true;
							} else if (reachRight) {
								reachRight = false;
							}
						}
					}
					pixelPos += can.width * 4;
				}
			}

			ctx.putImageData(date, 0, 0);
		}
		localStorage.setItem("canvas", can.toDataURL());
		miniCanvasFrame(counterFrames)
	});
}
