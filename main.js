var SpeechRecognition = window.webkitSpeechRecognition;
var WSAc = new SpeechRecognition();

function Start() {
    document.getElementById("SpokenT").innerHTML = "";
    WSAc.start()
}

WSAc.onresult = function(event) {
    console.log(event);
    var trs = event.results[0][0].transcript;
    console.log(trs);
    document.getElementById("SpokenT").innerHTML = trs;
    if (trs == "Take my selfie") {
        console.log("Taking photo...");
        speak();
    }
}

function speak() {
    var newApp = window.speechSynthesis;
    var inputText = "Taking selfie, please wait..."
    var appisF = new SpeechSynthesisUtterance(inputText);
    newApp.speak(appisF);
    Webcam.attach(camera);
    setTimeout(function() {
        takePhoto();
        downloadP();
    }, 3000);
}

camera = document.getElementById("camera");
Webcam.set({
    with : 300,
    height : 250,
    image_format : 'png',
    png_quality : 90
});

function takePhoto() {
    Webcam.snap(function(data_url){});
    document.getElementById("ResultImg").innerHTML = '<img id="takenS" src="' + data_url + '">';
}

function downloadP() {
    var filee = document.getElementById("takenImg");
    var imgSaving = document.getElementById("takenS").src;
    filee.href = imgSaving;
    filee.click();
}