import { can } from "./globalVariables.js";

// download picture
export function downloadImg() {
	var can = document.getElementById("canvas-1")
	var ctx = can.getContext("2d");
	document.getElementById("downloadGif").addEventListener("mousedown", () => {
		let link = document.createElement("a");
		link.download = "image.gif";
		can.toBlob(function(blob) {
			link.href = URL.createObjectURL(blob);
			link.click();
		}, "image/gif");
	});
}

export function downloadImg2() {
	var can = document.getElementById("canvas-1")
	var ctx = can.getContext("2d");
	document.getElementById("downloadApng").addEventListener("mousedown", () => {
		let link = document.createElement("a");
		link.download = "image.apng";
		can.toBlob(function (blob) {
			link.href = URL.createObjectURL(blob);
			link.click();
		}, "image/apng");
	});
}
