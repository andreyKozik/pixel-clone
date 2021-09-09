// import { can, ctx } from './globalVariables.js';
// import { correctSizeWindow } from "./script.js";
// console.log(correctSizeWindow)

export function changeCanvasSize(size, add, remove, remove1) {
	document.getElementById(add).addEventListener("mousedown", () => {
		const dataURL = localStorage.getItem("canvas");
		localStorage.setItem("sizeWindow", size);
		localStorage.setItem("buttonSize", add);
		const imgMini = new Image();
		imgMini.src = dataURL;
		imgMini.onload = () => {
			ctxMini.drawImage(imgMini, 0, 0, size, size);
		};
		const img = new Image();
		img.src = dataURL;
		img.onload = () => {
			ctx.drawImage(img, 0, 0, size, size);
		};
		document.getElementById(add).classList.add("active");
		document.getElementById(remove).classList.remove("active");
		document.getElementById(remove1).classList.remove("active");
		canMini.width = size;
		canMini.height = size;
		can.width = size;
		can.height = size;
		correctSizeWindow = 512 / size;
		ctx.imageSmoothingEnabled = false;
		ctxMini.imageSmoothingEnabled = false;
	});
}
