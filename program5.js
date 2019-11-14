var path = document.querySelector("#ImageSource");
var savePath;
var outputURL;
var img;
var AI;
var button;
function setup(){
    createCanvas(640,480);
    AI = ml5.imageClassifier("MobileNet", ()=>{
        console.log("ready");
        AI.predict("dob.jpg",Processing);
    })
    img = createImg("dob.jpg",()=>{
        Image("dob.jpg",0,0,width,height);
    });
    img.hide();
    background(0);
    button = createButton("Upload Image");
    button.mousePressed(()=>{
        
        savePath = path.value;
        outputURL = savePath.substring(12,savePath.lenght);
        console.log(outputURL);
        setup();
    });
}
function Processing(error,results){
    if(error){
        console.log("error");
    }
    else{
        console.log(result);
        AI.predict(outputURL,Processing);
        
    }
}