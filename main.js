var SpeechRecognition = window.webkitSpeechRecognition;
//the above code is the Speech API that we are using
var recognition = new SpeechRecognition();
//the above code shows an instance of the API

function start_app()
{
document.getElementById("textbox").innerHTML = "";
recognition.start();
//start is predefined function of API


}
recognition.onresult = function(event){
//onresult is also a predefined function
console.log(event);

var Content = event.results[0][0].transcript;

document.getElementById("textbox").innerHTML = Content;
console.log(Content);

if(Content == "take my selfie"){
 speak()
}


}
camera - document.getElementById("camera");

Webcam.set({
width:360,
height:250,
image_format:'jpeg',
jpeg_quality:90
});
function speak(){

var synth = window.speechSynthesis;
    //this is the second API we are using to convert Text To Speech
var speak_data = "taking your selfie in 5 seconds"

//this below code will convert the text into speech
var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function(){

take_snapshot();
save();
},5000)
}

function save() {
link = document.getElementById("link");
image_src = document.getElementById("captured_image").src ;
link.href = image_src;
link.click();
//.click() will automatically click the anchor tag and the image will be saved on its own 

}

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML= '<img id="captured_image" src = "'+data_uri+'">'


})

}