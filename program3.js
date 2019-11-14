var AI;
var img;
var imgPath = document.querySelector("#ImageSource");
var pic;
var upload;
var textbox = document.querySelector("#name");
var outputURL = "dob.jpg";
function setup(){
    var canvas = createCanvas(500,500);
    canvas.position(screen.width /2,screen.height /2);

    background(0);
    AI = ml5.imageClassifier("MobileNet",()=>{
        console.log("Processing is ready");
        show();
    });
    img = createImg(outputURL,()=>{
        image(img,0,0,width,height);
    })
    img.hide();
    upload = createButton("Upload Image");
    upload.position(screen.width - 500,20)
    upload.mousePressed(()=>{
        pic = imgPath.value;
        outputURL = pic.substring(12,pic.lenght);
        setup();
        upload.remove();
        
    })
}
function show(){
    AI.predict(img,showRes);
}
function showRes(error,results){
        if(error){
            console.log("error");
        }
        else{
            console.log(results);
            document.getElementById("status").innerHTML = results[0].label;
            AI.predict(img,showRes);
        }
    }
