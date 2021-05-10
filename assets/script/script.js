var canvas1 = new fabric.Canvas('c1');
var square = new fabric.Rect({
  left: 125, top: 50, fill: 'red', width: 40, height: 40
});
var rectangle = new fabric.Rect({
  left: 120, top: 50, fill: 'purple', width: 80, height: 40
});
var circle = new fabric.Circle({
  radius: 20, fill: 'green', left: 130, top: 50
});
var triangle = new fabric.Triangle({
  width: 40, height: 40, fill: 'blue', left: 120, top: 50
});
// "add" rectangle onto canvas
var rectangleCanvas = new fabric.Canvas('rectangleDrawer');
var squareCanvas = new fabric.Canvas('squareDrawer');
var triangleCanvas = new fabric.Canvas('triangleDrawer');
var circleCanvas = new fabric.Canvas('circleDrawer');
rectangleCanvas.add(rectangle);
squareCanvas.add(square)
triangleCanvas.add(triangle)
circleCanvas.add(circle)
// setInterval(function () {
//   document.getElementById("lengthOfTheSide").innerText = parseFloat((square.width * square.scaleX) * 0.0264583333).toFixed(2);
//   document.getElementById("X").innerText = square.top;
//   document.getElementById("Y").innerText = square.left;
// }, 1);
// "add" rectangle onto canvas






var heightOfRectangle,widthOfRectangle;
setInterval(function () {
  heightOfRectangle = document.getElementById("height2").innerText = parseFloat((rectangle.height * rectangle.scaleY) * 0.0264583333).toFixed(2);
  widthOfRectangle = document.getElementById("width2").innerText = parseFloat((rectangle.width * rectangle.scaleX) * 0.0264583333).toFixed(2);
  document.getElementById("rectangleArea").innerText = parseFloat(widthOfRectangle * heightOfRectangle).toFixed(2)
  document.getElementById("XNum").innerText = parseFloat(rectangle.top).toFixed(2);
  document.getElementById("YNum").innerText = parseFloat(rectangle.left).toFixed(2);
}, 300);
function submitAnwser(){
    if(widthOfRectangle == "4.24" && heightOfRectangle == "2.12"){
    alert("success")
  }else{
    alert("no")
    }
  }