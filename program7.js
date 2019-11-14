var AI;
var img;
function setup(){
    createCanvas(400,500);
    background(0);
    AI = ml5.imageClassifier("MobileNet",()=>{
        console.log("Done");
        AI.predict(img, (error,results)=>{
                  if(error){
                      console.log("error");
                  }
                  else{
                      console.log(results);
                  }
        })
    })
    img = createImg("dob.jpg",()=>{
        image(img,0,0,width,height)
    })
    img.hide()
}