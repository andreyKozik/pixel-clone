import "../css/style.css";
import "../js/globalVariables.js";

// import { size32X32, size64X64, size128X128 } from "./script.js";
// import { changeCanvasSize } from './changeCanvasSize.js';
import { penTool } from "./canvasTols/penTool/penTool.js";
import { colorPicker } from "./canvasTols/colorPickerTool/colorPicker.js";
import { chooseFill } from "./canvasTols/fillTool/chooseFill.js";;
import { eventsForButtonsColor } from "./eventsForButtonsColor.js";
import { downloadImg, downloadImg2 } from "./downloadImg.js";
import { eraserTool } from "./canvasTols/earaserTool/eraserTool.js";
import { keyboardEvents } from "./keyboardEvents.js";
import { authorizationGithub } from "./authorizationGithub.js";
import { miniCanvasFrame } from "./miniCanvasFrame.js";
import { keyboardWindow, closeKeyboardWindow } from "./keyboardWindow.js";
import { addNextFrame, counterFrames, switchFrame, prevue, deleteFrame } from "./globalVariables.js";

document.querySelector('.pencil').classList.add("active");
document.getElementById(`canvas-mini-1`).classList.add("active-border");
addNextFrame();
miniCanvasFrame(counterFrames);
eraserTool(counterFrames);
penTool(counterFrames);
colorPicker(counterFrames)
chooseFill(counterFrames);
eventsForButtonsColor();
downloadImg();
downloadImg2()
keyboardEvents();
switchFrame()
prevue()
keyboardWindow()
closeKeyboardWindow()


