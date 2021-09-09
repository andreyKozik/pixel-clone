import { can, ctx } from '../../globalVariables.js';
import { correctSizeWindow, size, arrayFirstСoordinatesPencil, counterFrames} from "../../globalVariables.js";
import { lineEraser } from "./forEraserbresenhamLineAlgorithm.js";
import { miniCanvasFrame } from "../../miniCanvasFrame.js";
import { eraser } from "./eraser.js";

export function eraserTool(i) {
	let can = document.getElementById(`canvas-${i - 1}`)
	let ctx = can.getContext("2d");
	eraser(counterFrames)

	function clearPencil() {
		document.querySelector(".pencil").classList.remove("active");
		document.querySelector(".choose-color").classList.remove("active");
		document.querySelector(".paint-bucket").classList.remove("active");
		document.querySelector(".clearTools").classList.add("active");
		eraser(counterFrames);
	}

	// create a pencil button
	document.querySelector(".clearTools").addEventListener("mousedown", clearPencil, false);
}
