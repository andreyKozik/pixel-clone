import { penTool } from "./canvasTols/penTool/penTool.js";
import { colorPicker } from "./canvasTols/colorPickerTool/colorPicker.js";
import { chooseFill } from "./canvasTols/fillTool/chooseFill.js";
import { eraserTool } from "./canvasTols/earaserTool/eraserTool.js";

export let correctSizeWindow;
export const arrayFirstСoordinatesPencil = [];
export var size = 1;
document.querySelector('.border-pen-size-1px').addEventListener("mousedown", () => {
	size = 1
	document.querySelector('.border-pen-size-1px').style.border = `solid rgb(255, 215, 0) 2px`
	document.querySelector('#pen-size-1px').style.background = `rgb(255, 215, 0)`
	document.querySelector('.border-pen-size-2px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-2px').style.background = `rgb(255, 255, 255)`
	document.querySelector('.border-pen-size-3px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-3px').style.background = `rgb(255, 255, 255)`
	document.querySelector('.border-pen-size-4px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-4px').style.background = `rgb(255, 255, 255)`
})
document.querySelector('.border-pen-size-2px').addEventListener("mousedown", () => {
	size = 2
	document.querySelector('.border-pen-size-2px').style.border = `solid rgb(255, 215, 0) 2px`
	document.querySelector('#pen-size-2px').style.background = `rgb(255, 215, 0)`
	document.querySelector('.border-pen-size-1px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-1px').style.background = `rgb(255, 255, 255)`
	document.querySelector('.border-pen-size-3px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-3px').style.background = `rgb(255, 255, 255)`
	document.querySelector('.border-pen-size-4px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-4px').style.background = `rgb(255, 255, 255)`
})
document.querySelector('.border-pen-size-3px').addEventListener("mousedown", () => {
	size = 3
	document.querySelector('.border-pen-size-3px').style.border = `solid rgb(255, 215, 0) 2px`
	document.querySelector('#pen-size-3px').style.background = `rgb(255, 215, 0)`
	document.querySelector('.border-pen-size-2px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-2px').style.background = `rgb(255, 255, 255)`
	document.querySelector('.border-pen-size-1px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-1px').style.background = `rgb(255, 255, 255)`
	document.querySelector('.border-pen-size-4px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-4px').style.background = `rgb(255, 255, 255)`
})
document.querySelector('.border-pen-size-4px').addEventListener("mousedown", () => {
	size = 4
	document.querySelector('.border-pen-size-4px').style.border = `solid rgb(255, 215, 0) 2px`
	document.querySelector('#pen-size-4px').style.background = `rgb(255, 215, 0)`
	document.querySelector('.border-pen-size-2px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-2px').style.background = `rgb(255, 255, 255)`
	document.querySelector('.border-pen-size-3px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-3px').style.background = `rgb(255, 255, 255)`
	document.querySelector('.border-pen-size-1px').style.border = `solid rgb(68, 68, 68) 2px`
	document.querySelector('#pen-size-1px').style.background = `rgb(255, 255, 255)`
})

export const output = document.getElementById("input");
export const outputPrev = document.getElementById("input_prev");
export const size32X32 = "32X32";
export const size64X64 = "64X64";
export const size128X128 = "128X128";
export let counterFrames = 2;
export let numberCanvas = 2;

let arrayCanvasFrames = [`canvas-1`];
let arrayCanvasFramesBlock = [`canvas-block-area-1`];
let arrayMiniCanvasFrames = [`canvas-mini-1`];
let canvasBlockMini = [`canvasBlockMini-1`];

// get size  canvas in localStorag

const canvasParameter = localStorage.getItem("sizeWindow");
const activeButton = localStorage.getItem("buttonSize");
if (canvasParameter === null) {
	correctSizeWindow = 512 / 32;
	document.getElementById("32X32").classList.add("active");
} else {
	let canMini = document.getElementById(`canvas-mini-${counterFrames - 1}`)
	let ctxMini = canMini.getContext("2d");
	var can = document.getElementById(`canvas-${counterFrames - 1}`)
	var ctx = can.getContext("2d");
	canMini.width = canvasParameter;
	canMini.height = canvasParameter;
	can.width = canvasParameter;
	can.height = canvasParameter;
	correctSizeWindow = 512 / canvasParameter;
	ctx.imageSmoothingEnabled = false;
	const dataURL = localStorage.getItem("canvas");
	const imgMini = new Image();
	imgMini.src = dataURL;
	imgMini.onload = () => {
		ctxMini.drawImage(imgMini, 0, 0, size, size);
	};
	const img = new Image();
	img.src = dataURL;
	img.onload = () => {
		ctx.drawImage(img, 0, 0, canvasParameter, canvasParameter);
	};
	document.getElementById(`${canvasParameter}X${canvasParameter}`).classList.add("active");
}

export function changeCanvasSize(size, add, remove, remove1) {
	var can = document.getElementById(`canvas-${counterFrames - 1}`)
	var ctx = can.getContext("2d");
	let canMini = document.getElementById(`canvas-mini-${counterFrames - 1}`)
	let ctxMini = canMini.getContext("2d");
	document.getElementById(add).addEventListener("mousedown", () => {
		const dataURL = localStorage.getItem("canvas");
		localStorage.setItem("sizeWindow", size);
		// localStorage.setItem("buttonSize", add);
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
changeCanvasSize(32, size32X32, size64X64, size128X128)
changeCanvasSize(64, size64X64, size32X32, size128X128)
changeCanvasSize(128, size128X128, size32X32, size64X64)

export function addNextFrame() {
	document.getElementById('addFrame').addEventListener("mousedown", () => {

		counterFrames = arrayMiniCanvasFrames.length + 1

		arrayCanvasFrames.push(`canvas-${counterFrames}`)
		arrayMiniCanvasFrames.push(`canvas-mini-${counterFrames}`)
		arrayCanvasFramesBlock.push(`canvas-block-area-${counterFrames}`)
		canvasBlockMini.push(`canvasBlockMini-${counterFrames}`)

		let clonedNodeMiniFrame = document.getElementById("canvasBlockMini-1").cloneNode(true);
		const frontAddFrame = document.getElementById("addFrame");
		document.getElementById("side-panel-frame").insertBefore(clonedNodeMiniFrame, frontAddFrame);
		clonedNodeMiniFrame.id = `canvasBlockMini-${counterFrames}`;
		document.querySelectorAll('canvas.canvasMiniStyle')[counterFrames - 1].id = `canvas-mini-${counterFrames}`
		document.querySelectorAll('div#side-panel-number')[counterFrames - 1].innerHTML = arrayMiniCanvasFrames.length

		let clonedNodeMainFrame = document.querySelector("#canvas-block-area-1").cloneNode(true);
		document.querySelector(".canvas-block").append(clonedNodeMainFrame);
		clonedNodeMainFrame.id = `canvas-block-area-${counterFrames}`;
		document.querySelectorAll('canvas.canvasMainsStyle')[counterFrames - 1].id = `canvas-${counterFrames}`

			// arrayCanvasFrames
			arrayMiniCanvasFrames.map(a => {
				document.querySelector(`#${a}.canvasMiniStyle`).classList.remove("active-border");
				document.querySelector(`#${a}.canvasMiniStyle`).style.margin = '3px 3px 3px 3px'
			})
			arrayCanvasFramesBlock.map(b => {
				document.getElementById(b).style.display = 'none';
			})
			document.getElementById(`canvas-mini-${counterFrames}`).classList.add("active-border");
			document.getElementById(`canvas-mini-${counterFrames}`).style.margin = '0px 0px 0px 0px'
			document.getElementById(`canvas-block-area-${counterFrames}`).style.display = 'block';

		counterFrames += 1;
		chooseFill(counterFrames);
		penTool(counterFrames);
		colorPicker(counterFrames);
		eraserTool(counterFrames);
	});
}



export function prevue() {
	setTimeout(function () {
		prevue()
		for (let i = 0; i <= arrayCanvasFrames.length - 1; i++) {
			setTimeout(function () {
				ctxRight.clearRect(0, 0, 201, 201);
			}, 10000)
			let can = document.getElementById(arrayCanvasFrames[i])
			let ctx = can.getContext("2d");
			let canRight = document.getElementById(`canvas-right`)
			let ctxRight = canRight.getContext("2d");
			let data1 = ctx.getImageData(0, 0, can.width, can.height);
			ctxRight.putImageData(data1, 0, 0, 0, 0, 201, 201);
		}
	}, 5000)
}




export function switchFrame() {
	window.onload = function () {
		document.body.onclick = function (event) {
			let t = event.target || event.srcElement;
				if (arrayMiniCanvasFrames.indexOf(t.id) >= 0) {
					// arrayCanvasFrames
					arrayMiniCanvasFrames.map(a => {
						document.querySelector(`#${a}.canvasMiniStyle`).classList.remove("active-border");
						document.querySelector(`#${a}.canvasMiniStyle`).style.margin = '3px 1px 1px 3px'
					})
					arrayCanvasFramesBlock.map(b => {
						document.getElementById(b).style.display = 'none';
					})
					document.querySelector(`#${t.id}.canvasMiniStyle`).classList.add("active-border");
					document.getElementById(`canvas-mini-${t.id.slice(-1)}`).style.margin = '0px 0px 0px 0px'
					document.getElementById(`canvas-block-area-${t.id.slice(-1)}`).style.display = 'block';
					counterFrames = +t.id.slice(-1) + 1
					chooseFill(counterFrames);
					penTool(counterFrames);
					colorPicker(counterFrames);
					eraserTool(counterFrames);
				}
		}
	}
}

// export function deleteFrame() {
// 	document.getElementById('side-panel-frame').addEventListener("mousedown", (event) => {
// 		let t = event.target || event.srcElement;
// 		if (t.id === `delete-frame-${t.id.slice(-1)}`) {
// 			arrayMiniCanvasFrames.map(a => {
// 				if (a === `canvas-mini-${t.id.slice(-1)}`) {
// 					let index = arrayMiniCanvasFrames.indexOf(`canvas-mini-${t.id.slice(-1)}`)
// 					arrayMiniCanvasFrames.splice(index, 1)
// 					let index2 = canvasBlockMini.indexOf(`canvasBlockMini-${t.id.slice(-1)}`)
// 					canvasBlockMini.splice(index2, 1)
// 				}
// 			})
// 			// document.querySelectorAll('div#side-panel-number')[counterFrames - 1].innerHTML = arrayMiniCanvasFrames.length
// 			document.getElementById(`canvasBlockMini-${t.id.slice(-1)}`).remove();
// 			counterFrames--
// 			// document.getElementById(`canvas-block-area-${t.id.slice(-1)}`).remove();
// 			let s = document.querySelectorAll('div#side-panel-number')
// 			for (let i = 0; i <= s.length - 1; i++) {
// 				s[i].innerHTML = i+1;
// 				arrayCanvasFramesBlock[i] = `canvas-block-area-${i + 1}`;
// 				arrayMiniCanvasFrames[i] = `canvas-mini-${i + 1}`;
// 				canvasBlockMini[i] = `canvasBlockMini-${i + 1}`
// 			}

// 			// arrayMiniCanvasFrames.map(a => {
// 			// 	document.querySelector(`#${a}.canvasMiniStyle`).classList.remove("active-border");
// 			// 	document.querySelector(`#${a}.canvasMiniStyle`).style.margin = '3px 3px 3px 3px'
// 			// })

// 			// document.getElementById(`canvas-mini-${counterFrames}`).classList.add("active-border");
// 			// arrayCanvasFrames = [`canvas-1`];
// 			console.log(canvasBlockMini)
// 			console.log(arrayMiniCanvasFrames)
// 			console.log(counterFrames)
// 		}
// 		// console.log(arrayMiniCanvasFrames)
// 	})
// }
