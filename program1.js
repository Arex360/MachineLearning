let obilenet;
let test;
var showResult = document.querySelector("#output");
function show(){
    console.log("I am on");
    console.log(ml5.version);
    obilenet.predict(test,result);
}
function result(error,results){
    if(error){
        console.error("error");
    }
    else{
        console.log(results);
        let label = results[0].label;
        document.getElementById("output").innerHTML = label;
        
    }
}
function onReady(){
    image(test,0,0,width,height);
}
function setup(){
    createCanvas(640,480);
    test = createImg('Adelie-penguin.jpg',onReady);
    test.hide();
    background(0);
    
    obilenet = ml5.imageClassifier('MobileNet',show);
}