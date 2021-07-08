function setup()
{
    canvas=createCanvas(600,700);
    canvas.position(50,50);
    video=createCapture(VIDEO)//used to access the Webcam.
    video.hide();
}
function draw()
{

  circle(500,100,80)
  fill(128,0,0)
  stroke(0,0,128)

  circle(50, 100, 80);
  fill(128,0,0)
  stroke(0,0,128)

  circle(500, 400, 80);
  fill(128,0,0)
  stroke(0,0,128)

  circle(50, 400, 80);
  fill(128,0,0)
  stroke(0,0,128)


  rect(130, 20, 300, 55);
  fill(128,0,0)
  stroke(0,0,128)

  rect(130, 420, 300, 55);
  fill(128,0,0)
  stroke(0,0,128)

  


    image(video ,100,100,350,300);//used to load an image on the canvas.
    


}