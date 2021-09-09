import { fillAlgorithm } from "./fillAlgorithm.js"
import { can, ctx, correctSizeWindow, size, objContexts, counterFrames } from '../../globalVariables.js';
import { miniCanvasFrame } from "../../miniCanvasFrame.js"


export function chooseFill(i) {
	let can = document.getElementById(`canvas-${i - 1}`)
	let ctx = can.getContext("2d");
	fillAlgorithm(counterFrames)

	function fillBucket() {
		can.addEventListener("mousedown", fillAlgorithm, false);
	}

	document.querySelector(".paint-bucket").addEventListener("mousedown", () => {
		document.querySelector(".paint-bucket").classList.add("active");
		document.querySelector(".choose-color").classList.remove("active");
		document.querySelector(".pencil").classList.remove("active");
		document.querySelector(".clearTools").classList.remove("active");
		fillBucket(counterFrames);
	});
}
