document.getElementById("button").addEventListener("click", () => {

    let recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
        document.getElementById("action").innerHTML = "Listening...";
        button.classList.add("clicked");

    };

    recognition.onresult = (e) => {

        var text = e.results[0][0].transcript;
        document.getElementById("text").innerHTML = text;
        document.getElementById("action").innerHTML = "";
        button.classList.remove("clicked");

        sendData(text);
    };

    recognition.start();
});

function sendData(text) {
    var data = {
        text: text
    };

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "script.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(data));
}