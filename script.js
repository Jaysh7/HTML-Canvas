"use strict";
//data set
var data = [100, 68, 20, 30, 100];

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
//background color
c.fillStyle = "LightGray";
c.fillRect(0, 0, 500, 500);

//adding colors to the pie
var colors = ["Tomato", "MediumSeaGreen", "SlateBlue", "yellow", "teal"];

//calculate the data
var total = 0;
for (var i = 0; i < data.length; i++) {
  total = total + data[i];
}
/* total = 0 
i=0 ; 0<5 ; i++ 
tot = 0 + 100 = 100 -> total 100; 
i=1 ; 1<5 ; i++
tot = 100 + 68 = 168 -> total 168; 
......conti "TOTAL = 318"
*/

// draw a pie data
var prevAngle = 0;
for (var i = 0; i < data.length; i++) {
  //fraction that this pieslice represents
  var fraction = data[i] / total;
  //fraction = 100[0] / 318 => "0.31"

  //calc starting angle
  var angle = prevAngle + fraction * Math.PI * 2;
  //angle = 0 + 0.31 + 3.14 * 2 => "1.94"

  //draw the pie slice
  c.fillStyle = colors[i];
  //create path
  c.beginPath();
  c.moveTo(250, 250);
  c.arc(250, 250, 100, prevAngle, angle, false);
  // 250 -> x , 250 ->  y, prevAngle -> 0 , angle , false -> counterclock wise
  c.lineTo(250, 250);
  //fill it
  c.fill();

  //stroke it
  c.strokeStyle = "black";
  c.stroke();
  //update for the next time through the loop
  prevAngle = angle;
}
