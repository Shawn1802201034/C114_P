function preload(){
   sunglasses = loadImage('download.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Made')
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-65;
        noseY = results[0].pose.nose.y-75;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(sunglasses, noseX , noseY , 115 , 90);
}

function takeSnapshot(){
    save('myFilterImage.png');
}