var canvas1 = new fabric.Canvas('c1');
var square = new fabric.Rect({
  left: 200,
  top: 0,
  fill: 'red',
  width: 40,
  height: 40
});
var mostatel = new fabric.Rect({
  left: 200,
  top: 50,
  fill: 'purple',
  width: 80,
  height: 40
});
var Rectangle = new fabric.Rect({
  left: 200,
  top: 150,
  fill: 'grey',
  width: 160,
  height: 20
});

// "add" rectangle onto canvas
canvas1.add(square);
var canvas = new fabric.Canvas('drawer');
// "add" rectangle onto canvas
var circle = new fabric.Circle({
  radius: 20, fill: 'green', left: 100, top: 0
});
var triangle = new fabric.Triangle({
  width: 40, height: 40, fill: 'blue', left: 0, top: 0
});
canvas.add(circle, triangle, square, mostatel , Rectangle);
var heightOfRectangle,widthOfRectangle;
// setInterval(function () {
//   document.getElementById("lengthOfTheSide").innerText = parseFloat((square.width * square.scaleX) * 0.0264583333).toFixed(2);
//   document.getElementById("X").innerText = square.top;
//   document.getElementById("Y").innerText = square.left;
// }, 1);
setInterval(function () {
  heightOfRectangle = document.getElementById("height2").innerText = parseFloat((mostatel.height * mostatel.scaleY) * 0.0264583333).toFixed(2);
  widthOfRectangle = document.getElementById("width2").innerText = parseFloat((mostatel.width * mostatel.scaleX) * 0.0264583333).toFixed(2);
  document.getElementById("Msa7aOfMostatel").innerText = parseFloat(widthOfRectangle * heightOfRectangle).toFixed(2)
  document.getElementById("X2").innerText = parseFloat(mostatel.top).toFixed(2);
  document.getElementById("Y2").innerText = parseFloat(mostatel.left).toFixed(2);
}, 300);
function submitAnwser(){
    if(widthOfRectangle == "4.24" && heightOfRectangle == "2.12"){
    alert("success")
  }else{
    alert("no")
    }
  }