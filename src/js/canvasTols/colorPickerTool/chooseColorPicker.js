import { colorPicker } from "./colorPicker.js"
import { can, ctx, correctSizeWindow, size, objContexts, counterFrames } from '../../globalVariables.js';
import { miniCanvasFrame } from "../../miniCanvasFrame.js"


export function chooseFill(i) {
	let can = document.getElementById(`canvas-${i - 1}`)
	let ctx = can.getContext("2d");
	colorPicker(counterFrames)

	function chooseColor() {
		can.addEventListener("mousedown", colorPicker, false);
		document.oncontextmenu = function () { return false };
	}

	//  create button Color picker
	document.querySelector(".choose-color").addEventListener("mousedown", () => {
		document.querySelector(".choose-color").classList.add("active");
		document.querySelector(".pencil").classList.remove("active");
		document.querySelector(".paint-bucket").classList.remove("active");
		document.querySelector(".clearTools").classList.remove("active");
		chooseColor(counterFrames);
	});
}
