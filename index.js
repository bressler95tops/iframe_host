window.addEventListener('message', receiveMessage, false);
function receiveMessage(event){
    console.log("Received something from embedded iFrame" + event.origin);
    if(event.origin!=="https://bressler95tops.github.io")
    return;

}

var receiver = document.getElementById('receiver').contentWindow;

    // Get a reference to the 'Send Message' button.
    var btn = document.getElementById('send');

    // A function to handle sending messages.
    function sendMessage(e) {
        // Prevent any default browser behaviour.
        e.preventDefault();

        // Send a message with the text 'Hello Treehouse!' to the new window.
        receiver.postMessage('cookie data!', '*');
    }

    // Add an event listener that will execute the sendMessage() function
    // when the send button is clicked.
    btn.addEventListener('click', sendMessage);
