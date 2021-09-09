import { penTool } from "./canvasTols/penTool/penTool.js";
import { colorPicker } from "./canvasTols/colorPickerTool/colorPicker.js";
import { fillAlgorithm } from "./canvasTols/fillTool/fillAlgorithm.js";
import { eraserTool } from "./canvasTols/earaserTool/eraserTool.js";
import { counterFrames } from "./globalVariables.js";

// hear events from the keyboard
export function keyboardEvents() {
	document.addEventListener("keydown", event => {
		if (event.code === "KeyP") {
			document.querySelector(".pencil").classList.add("active");
			document.querySelector(".choose-color").classList.remove("active");
			document.querySelector(".paint-bucket").classList.remove("active");
			document.querySelector(".clearTools").classList.remove("active");
			penTool(counterFrames);
		} else if (event.code === "KeyC") {
			document.querySelector(".choose-color").classList.add("active");
			document.querySelector(".pencil").classList.remove("active");
			document.querySelector(".paint-bucket").classList.remove("active");
			document.querySelector(".clearTools").classList.remove("active");
			colorPicker(counterFrames);
		} else if (event.code === "KeyB") {
			document.querySelector(".paint-bucket").classList.add("active");
			document.querySelector(".choose-color").classList.remove("active");
			document.querySelector(".pencil").classList.remove("active");
			document.querySelector(".clearTools").classList.remove("active");
			fillAlgorithm(counterFrames);
		} else if (event.code === "KeyE") {
			document.querySelector(".clearTools").classList.add("active");
			document.querySelector(".paint-bucket").classList.remove("active");
			document.querySelector(".choose-color").classList.remove("active");
			document.querySelector(".pencil").classList.remove("active");
			eraserTool(counterFrames);
		}
	});
}
