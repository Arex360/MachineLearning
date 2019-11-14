var AI;
var img;
var textbox = document.querySelector("#name");
var button = document.querySelector("#Proceed");
var outputURL;
var path;

function setup(){
    var canvas = createCanvas(500,500);
    canvas.position(400,200);
    background(0);
    AI = ml5.imageClassifier("MobileNet",()=>{
        console.log("Processing is ready");
        show();
    });
    img = createImg(path,()=>{
        image(img,0,0,width,height);
    })
    img.hide();
}
function show(){
    AI.predict(img,(error,results)=>{
        if(error){
            console.log("error");
        }
        else{
            console.log(results);
            
        }
    })
}
button.addEventListener("click", ()=>{
    
    path = textbox.value;
    outputURL = path.substring(12,path.lenght);
    console.log(outputURL);
    setup();
})