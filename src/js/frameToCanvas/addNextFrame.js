

// let counterFrames = 2;
// export function addNextFrame() {
// 	document.getElementById('addFrame').addEventListener("mousedown", () => {
// 		let clonedNodeMiniFrame = document.getElementById("canvas-mini-1").cloneNode(true);
// 		const frontAddFrame = document.getElementById("addFrame");
// 		document.getElementById("side-panel-frame").insertBefore(clonedNodeMiniFrame, frontAddFrame);
// 		clonedNodeMiniFrame.id = `canvas-mini-${counterFrames}`;
// 		document.querySelectorAll('canvas.canvasMiniStyle')[counterFrames - 1].id = `canvas-mini-${counterFrames}`
// 		document.querySelectorAll('div#side-panel-number')[counterFrames - 1].innerHTML = `${counterFrames}`

// 		let clonedNodeMainFrame = document.querySelector("#canvas-block-area-1").cloneNode(true);
// 		document.querySelector(".canvas-block").append(clonedNodeMainFrame);
// 		clonedNodeMainFrame.id = `canvas-block_area-${counterFrames}`;
// 		document.querySelectorAll('canvas.canvasMainsStyle')[counterFrames - 1].id = `canvas-${counterFrames}`
// 		document.querySelectorAll('div.canvas-block-area-style')[counterFrames - 2].style.display = 'none';
// 		document.querySelectorAll('div.canvas-block-area-style')[counterFrames - 1].style.display = 'block';

// 		let can = document.getElementById(`canvas-${counterFrames}`);
// 		let canMini = document.getElementById(`canvas-mini-${counterFrames}`);
// 		counterFrames++;
// 		console.log()
// 	});
// }

