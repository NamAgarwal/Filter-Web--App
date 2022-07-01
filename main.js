noseX = "";
noseY = "";

function preload(){}

function setup() {
    canvas = createCanvas(370, 370);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(370, 370)
    video.hide();

   posenet =  ml5.poseNet(video, modeLoaded);
    posenet.on('pose' ,gotPoses);
}
function modeLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){
    image(video, 0, 0, 370, 370);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function take_snapshot(){
    save('filter.png');
}