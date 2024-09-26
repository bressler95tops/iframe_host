console.log("Starting Host...");
    
    var receiver = document.getElementById('receiver').contentWindow;

    // Get a reference to the 'Send Message' button.
    var btn = document.getElementById('send');

    // A function to handle sending messages.
    function sendMessage(e) {
        // Prevent any default browser behaviour.
        e.preventDefault();

        // Send a message with the text 'Hello Treehouse!' to the new window.
        receiver.postMessage('cookie data!', 'https://iframehost.pages.dev');
    }

    // Add an event listener that will execute the sendMessage() function
    // when the send button is clicked.
    btn.addEventListener('click', sendMessage);
