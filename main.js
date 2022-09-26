objects=[];
status="";

function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    video=createCanvas(VIDEO);
    video.size(380, 380);
    video.hide();
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
}

function start(){
    objectDetector=ml5.objectdetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    object_name=
}