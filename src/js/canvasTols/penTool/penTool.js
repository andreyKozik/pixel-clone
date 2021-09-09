import { outputPrev, output, objContexts } from "../../globalVariables.js";
import { correctSizeWindow, size, arrayFirstСoordinatesPencil, counterFrames} from "../../globalVariables.js";
import { line } from "./forPenbresenhamLineAlgorithm.js";
import { miniCanvasFrame } from "../../miniCanvasFrame.js";
import { pencil } from "./pencil.js";



export function penTool(i) {
	let can = document.getElementById(`canvas-${i - 1}`)
	let ctx = can.getContext("2d");
	pencil(counterFrames)

	function drawPencil() {
		document.querySelector(".pencil").classList.add("active");
		document.querySelector(".choose-color").classList.remove("active");
		document.querySelector(".paint-bucket").classList.remove("active");
		document.querySelector(".clearTools").classList.remove("active");
		document.oncontextmenu = function () { return false };
		pencil(counterFrames);
	}

		document.querySelector(".pencil").addEventListener("mousedown", drawPencil, false);
}
