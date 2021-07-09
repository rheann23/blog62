earx =0
eary =0

function preload(){
    earring_nose=loadImage('https://i.postimg.cc/QdGwGSf7/imageedit-1-3913196809.png');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
video.size(300, 300);
video.hide();


poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('PoseNet is Initailized');
}

function gotPoses(results){



    if(results.length > 0){
        console.log(results);
        earx=results[0].pose.leftEar.x-10;
        eary=results[0].pose.leftEar.y-10;
    }
    }
    
    function draw(){
        image(video,0,0,300,300);
        image(earring_nose,earx,eary,30,30)
    }
    
    function take_snapshot(){
        save('my filter image.png');
    }
    
    