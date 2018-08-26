var introText = "Hello.  I'm Sara, and I like to code."
var introCounter=0;

function introType(){
    if (introCounter < introText.length){

        document.getElementById("intro").innerHTML += introText.charAt(introCounter);
        introCounter++;
        setTimeout(introType, 50);
    }
}

introType();