
export function keyboardWindow() {
	document.getElementById('keyboard').addEventListener("mousedown", () => {
		document.getElementById(`keyboardWindow`).style.display = `block`;
		document.getElementById(`keyboardWindow`).style.opacity = `1`;
		document.querySelector(`.header`).style.opacity = `0.5`;
		document.querySelector(`.body`).style.opacity = `0.5`;
	})
}

export function closeKeyboardWindow() {
	document.getElementById('closeKeyboardWindow').addEventListener("mousedown", () => {
		document.getElementById(`keyboardWindow`).style.display = `none`;
		document.querySelector(`.header`).style.opacity = `1`;
		document.querySelector(`.body`).style.opacity = `1`;
	})
}
