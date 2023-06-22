function StartClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/o2d-mYS9v/modeljson", modelReady);
}

function modelReady()
{
    classifier.classify(gotresult);
}

function gotresult(error, results)
{
    console.log("got result");
}