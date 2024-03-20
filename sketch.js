let randomNormals = [];
let randomPerlins = [];

function setup() {
 // put setup code here
 createCanvas(windowWidth, windowHeight);
 var vn = 0;
 for (var i=0; i<100; i++){
   randomNormals[i] = vn;//;
   vn = vn + randomGaussian(0, 1);
 }
 var t = 0;
 for (var j=0; j<1000; j++){
   randomPerlins[j] = noise(t);//;
   t = t + 0.01;
 }
}

function draw() {
  background(127)
  
  var w = windowWidth / randomNormals.length;
  strokeWeight(4);
  for (var i=0; i<randomNormals.length-1; i++){
     y1 = map(randomNormals[i],
            min(randomNormals),
            max(randomNormals),
            0,
            windowHeight/2 );
     y2 = map(randomNormals[i+1],
            min(randomNormals),
            max(randomNormals),
            0,
            windowHeight/2 );
     line(i*w,
          windowHeight/2 - y1,
          (i+1)*w,
          windowHeight/2 - y2);
  }
  
  line(0,
       windowHeight/2,
       windowWidth,
       windowHeight/2);
  
  var z = windowWidth / randomPerlins.length;
  strokeWeight(2);
  for (var j=0; j<randomPerlins.length-1; j++){
    x1 = map(randomPerlins[j],
           min(randomPerlins),
           max(randomPerlins),
           0,
           windowHeight/2 );
    x2 = map(randomPerlins[j+1],
           min(randomPerlins),
           max(randomPerlins),
           0,
           windowHeight/2 );
    line(j*z,
         windowHeight - x1,
         (j+1)*z,
         windowHeight - x2);
  }
}