document.addEventListener("DOMContentLoaded", function() {

let receiver = document.getElementById('receiver').contentWindow;
window.addEventListener('message', receiveMessage, false);
    
function receiveMessage(event){
    console.log("Received something from embedded iFrame: " + event.origin);
    if(event.origin !== "https://iframehost.pages.dev")
    return;
    localStorage.setItem("cookie_value", event.data);
}

// A function to handle sending messages.
function init_iframe() {
    const cookie_value = localStorage.getItem("cookie_value");
    receiver.postMessage(cookie_value, '*');
}

init_iframe();

});
