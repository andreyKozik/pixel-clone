import { can, ctx, outputPrev, output } from './globalVariables.js';

//  events for buttons
export function eventsForButtonsColor() {
	var can = document.getElementById("canvas-1")
	var ctx = can.getContext("2d");
	// create a color preview
	document.querySelector("#input").addEventListener("mousedown", () => {
		const outputColor = document.getElementById("input");
		ctx.fillStyle = outputColor.value;
	});

	document.querySelector(".current-color").addEventListener("mousedown", () => {
		document.getElementById("input").click();
		const outputColor = document.getElementById("input");
		ctx.fillStyle = outputColor.value;
		document.querySelector("#input").addEventListener("change", () => {
			localStorage.setItem("current-color", output.value);
		});
	});

	document.querySelector(".prev-color").addEventListener("mousedown", () => {
		document.getElementById("input_prev").click();
		const outputColor = document.getElementById("input_prev");
		ctx.fillStyle = outputColor.value;
		document.querySelector("#input_prev").addEventListener("change", () => {
			localStorage.setItem("prev-color", output.value);
		});
	});
}
