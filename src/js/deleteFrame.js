export function deleteFrame() {
	document.getElementById('side-panel-frame').addEventListener("mousemove", (event) => {
		let t = event.target || event.srcElement;
		return t;
	})
	document.getElementById(`delete-frame-${t.id.slice(-1)}`).addEventListener("mousedown", () => {
		document.getElementById(`delete-frame-${t.id.slice(-1)}`).remove();
		
	})
}
