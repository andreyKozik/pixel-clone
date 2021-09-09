import { correctSizeWindow, size, counterFrames } from "../../globalVariables.js";

export function colorPicker(i) {
	let can = document.getElementById(`canvas-${i-1}`)
	let ctx = can.getContext("2d");
	function detectColor(evt) {
		localStorage.getItem("context");
		if (document.querySelector(".choose-color").classList.contains("active") === true) {
			const rect = can.getBoundingClientRect();
			let x = (evt.clientX - rect.left) / correctSizeWindow;
			let y = (evt.clientY - rect.top) / correctSizeWindow;
			x = (Math.ceil(x / size) - 1) * size;
			y = (Math.ceil(y / size) - 1) * size;
			const data = ctx.getImageData(x, y, 1, 1).data;
			const col = {
				r: data[0],
				g: data[1],
				b: data[2],
				a: data[3]
			};

			const r = data[0].toString(16);
			col.r = r.length === 1 ? `0${r}` : r;

			const g = data[1].toString(16);
			col.g = g.length === 1 ? `0${g}` : g;

			const b = data[2].toString(16);
			col.b = b.length === 1 ? `0${b}` : b;

			const outputColor = document.getElementById("input");
			const outputPrevColor = document.getElementById("input_prev");
			if(evt.which === 1) {
				outputColor.value = `#${col.r}${col.g}${col.b}`;
				ctx.fillStyle = outputColor.value;
			} else if (evt.which === 3) {
				outputPrevColor.value = `#${col.r}${col.g}${col.b}`;
				ctx.fillStyle = outputPrevColor.value;
			}
		}
	}

	function chooseColor() {
		can.addEventListener("mousedown", detectColor, false);
		document.oncontextmenu = function () { return false };
	}

	//  create button Color picker
	document.querySelector(".choose-color").addEventListener("mousedown", () => {
		document.querySelector(".choose-color").classList.add("active");
		document.querySelector(".pencil").classList.remove("active");
		document.querySelector(".paint-bucket").classList.remove("active");
		document.querySelector(".clearTools").classList.remove("active");
		chooseColor();
	});
}
