const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = "destination-over";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let scale = 8;
let number = 0;
function draw() {
  let angle = number * 0.8;
  let radius = scale * Math.sqrt(number);

  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.strokeStyle = "whitesmoke";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.stroke();
  number++;
}

function animate() {
  draw();
  //   size += 0.1;
  if (number > 450) return;
  requestAnimationFrame(animate);
}

animate();
