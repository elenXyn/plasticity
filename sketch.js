function setup() {
  var canvas = createCanvas(500, 500);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
}

function draw() {
  
  if (mouseY<125) {
    b=0;
    c=255;
  } else if (mouseY<250 && mouseY>125) {
    b=255;
    c=0;
  } else if (mouseY<375 && mouseY>250) {
    b=0;
    c=255;
  } else {
    b=255;
    c=0;
  }
  
  background(b,b,b);

//shirt
  stroke(c, c, c);
  fill(c, c, c);
  bezier(87, 425, 62, 437, 25, 474, 20, 500);
  bezier(87, 425, 125, 412, 163, 412, 187, 425);
  
  fill(c, c, c);
  bezier(412, 425, 455, 412, 493, 412, 500, 425);
  
  noStroke();
  triangle(19, 500, 87, 424, 87, 500);
  
  rect (87, 425, 100, 87);
  rect (412, 425, 100, 87);  
  rect (187, 425, 225, 87);
  
//neck ans shirt
  fill(c, c, c);
  arc(300, 425, 225, 100, 0, PI, open);
  
  stroke(185,127,86);
  strokeWeight(5);
  fill(185,127,86);
  bezier(187, 425, 262, 474, 337, 474, 412, 425);

  strokeWeight(5);
  stroke(185,127,86);
  noFill();  
  bezier(187, 425, 212, 400, 225, 375, 225, 312);
  bezier(362, 362, 375, 383, 387, 415, 412, 425);
  
  fill(185,127,86);
  strokeWeight(1);
  quad (228, 362, 362, 362, 389, 425, 198, 425 );
  
  fill(185,127,86);  
  triangle(192,425, 205, 400, 215, 425);
  triangle(372,385, 408, 425, 362, 425);
  triangle(222,375, 362, 364, 229, 315);
  
  fill(104,64,44);
  stroke(104,64,44)
  line(227, 349, 262, 412);
  line(262, 412, 262, 430);
  line(312, 378, 300, 412);
  line(300, 412, 300, 449);
  line(337, 400, 352, 377);
  
  fill(185,127,86);
  stroke(104,64,44);

  bezier(225, 312, 304, 349, 325, 358, 365, 362);
  bezier(362, 362, 412, 352, 430, 330, 425, 308);
  
//face
  stroke(185,127,86);
  strokeWeight(2);
  bezier(426, 276, 430, 255, 430, 225, 428, 204);
  
  fill(185,127,86);
  strokeWeight(3);
  bezier(427, 202, 420, 190, 413, 183, 406, 177);
  strokeWeight(1);
  bezier(406, 177, 393, 143, 375, 112, 349, 80);
  bezier(349, 80, 330, 74, 300, 78, 287, 87);
  line(287,87,225,163);
  bezier(225, 163, 212, 187, 215, 218, 218, 240);
  line(218,240,223,312);
  quad(225, 163, 287, 87, 349, 80, 391, 143);
  quad(225, 163, 219, 236, 403, 174, 388, 143);
  quad(219, 236, 403, 174, 427, 203, 225, 312);
  quad(225, 312, 428, 203, 426, 308, 362, 362)

//expressions
  noFill();
  stroke(104,64,44)
  line(262, 287, 300, 312);
  bezier(349, 220, 336, 235, 326, 245, 316, 245);
  bezier(383, 192, 393, 193, 400, 185, 407, 175);
  strokeWeight(3);
  point(362,125);
  
//lips
  fill(114,61,67);
  stroke(114,61,67);
  strokeWeight(3);
  triangle (364, 312, 430, 278, 425, 308);
  
  fill(114,61,67);
  stroke(80,29,32);
  strokeWeight(2);
  bezier(425, 308, 412, 315, 387, 319, 362, 312);
  bezier(364, 312, 379, 300, 402, 285, 415, 285);
  bezier(410, 285, 418, 280, 425, 277, 430, 278);
  bezier(430, 278, 430, 278, 433, 281, 425, 308);
  bezier(387, 308, 394, 298, 400, 293, 412, 295);
  bezier(412, 294, 416, 288, 424, 283, 426, 282);
  
  fill(80,29,32);
  stroke(80,29,32);
  strokeWeight(1);
  line(390, 310, 392, 305);
  line(396, 303, 398, 308);
  line(412, 298, 418, 302);
  line(418, 296, 421, 300);
  
//eyebrown right
  fill(34,30,30);
  stroke(34,30,30);
  strokeWeight(4);
  bezier(385, 134, 381, 143, 373, 165, 375, 187);
  
//nose
  noFill();
  stroke(104,64,44);
  strokeWeight(1);
  bezier(374,187,381,206,400,218,412,225);
  bezier(412,225,418,237,417,256,410,260);
  bezier(410,260,400, 258, 390,265, 381,272);
  bezier(381,272,375,273,369,263,372,253);
  
//eye right
  stroke(33,30,31);
  fill(33,30,31);
  strokeWeight(1);
  bezier(381,180,392,180,400,175,402,164);

  steps = 17;
  for (i = 0; i <= steps; i++) {
    t = i / steps;
    x = bezierPoint(381, 392, 400, 409, t);
    y = bezierPoint(189, 187, 181, 170, t);
    tx = bezierTangent(390, 392, 400, 409, t);
    ty = bezierTangent(186, 187, 179, 163, t);
    a = atan2(ty, tx);
    a -= HALF_PI;
    line(x, y, cos(a)*12 + x, sin(a)*7+ y);
  }

//eyebrown left
  fill(34,30,30);
  stroke(34,30,30);
  strokeWeight(5);
  bezier(262, 218, 293, 200, 322, 187, 346, 187);
  
//eye left
  stroke(33,30,31);
  fill(33,30,31);
  strokeWeight(1);
  bezier(348,210,337,225,316,238,285,238);

  steps = 30;
  for (i = 0; i <= steps; i++) {
    t = i / steps;
    x = bezierPoint(343, 337, 316, 294, t);
    y = bezierPoint(212, 225, 235, 237, t);
    tx = bezierTangent(342, 337, 360, 268, t);
    ty = bezierTangent(200, 230, 300, 217, t);
    a = atan2(ty, tx);
    a -= HALF_PI;
    line(x, y, cos(a)*8 + x, sin(a)*10 + y);
  }
  
//hair
  fill(19,18,16);
  noFill();
  strokeWeight(2);
  
  xf=255;
  yf=494;
  for (x=150; x<=xf; x+=5) {
    beginShape();
    for (y=62; y<=yf; y+=12) {
      if(y==74 || y==122  || y==158  || y==206  || y==254  || y==302 || y==350 || y==398 || y==446 || y==494) {
        curveVertex(x+12,  y); 
      }   else if(y==98 || y==146  || y==182  || y==230  || y==278  || y==326 || y==374 || y==422  || y==470) {
        curveVertex(x-12,  y); 
      } else {
        curveVertex(x,  y); 
      }
    }
    endShape();
  }
  
//correction box
  fill(b,b,b);
  stroke(b,b,b);
  rect(0,0,500, 112);
  
//frame
  noFill();
  stroke(c,c,c);
  rect (29, 92, 470, 398)
  stroke(250, 214, 18);
  rect (10, 114, 470, 368);
 
  
}   