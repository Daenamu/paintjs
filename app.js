const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors  = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    startPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}
if (colors) {
    Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}
if (range) {
    range.addEventListener("input", handleRangeChange)
}