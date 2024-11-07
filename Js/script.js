document.addEventListener("DOMContentLoaded", function () {
    // Display the current date
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('current-date').innerText = currentDate;

    // Hamburger toggle for small screens
    window.toggleSidebar = function () {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('show');
    }

    // Handle the send button click
    document.getElementById('button').addEventListener('click', function () {
        sendMessage();
    });

    // Send a message when pressing Enter
    document.getElementById('input').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send the message
    function sendMessage() {
        const inputField = document.getElementById('input');
        const message = inputField.value.trim();

        if (message) {
            // Add user message to chat
            const chatDiv = document.getElementById('chat');
            const userMessage = document.createElement('div');
            userMessage.classList.add('message', 'user');
            userMessage.innerHTML = `
                <div class="text">${message}</div>
                <div class="time">${new Date().toLocaleTimeString()}</div>
            `;
            chatDiv.appendChild(userMessage);

            // Scroll to the bottom of the chat
            chatDiv.scrollTop = chatDiv.scrollHeight;

            // Clear input field
            inputField.value = '';

            // Call bot response after user sends a message
            setTimeout(() => {
                sendBotResponse(message);
            }, 1000);
        }
    }

    // Function to handle bot response based on the message
    function sendBotResponse(message) {
        let response = '';
        message = message.toLowerCase(); // Convert message to lowercase for better matching

        // Greetings and Register Dialogs
        if (message.includes('hi') || message.includes('hello')) {
            response = `Hello! I'm Quily, your chatbot assistant. How can I help you today?`;
        } else if (message.includes('how are you')) {
            response = `I'm doing great, thank you for asking! How can I assist you?`;
        } else if (message.includes('good morning')) {
            response = `Good morning! ☀️ How can I help you today?`;
        } else if (message.includes('good evening')) {
            response = `Good evening! 🌙 How can I assist you today?`;
        } else if (message.includes('good night')) {
            response = `Good night! 🌙 I hope you have a restful sleep.`;
        } else if (message.includes('bye') || message.includes('goodbye')) {
            response = `Goodbye! Have a great day ahead! 👋`;

        // Basic Information
        } else if (message.includes('what is your name')) {
            response = "My name is Quily! 😊";
        } else if (message.includes('who are you')) {
            response = "I'm Quily, your friendly assistant chatbot! 💻 How can I help you today?";
        } else if (message.includes('what is the date') || message.includes('what is today')) {
            response = `Today is ${new Date().toLocaleDateString()}.`;

        // Fun Responses
        } else if (message.includes('tell me a joke')) {
            const jokes = [
                "Why don’t skeletons fight each other? They don’t have the guts.",
                "Why don’t some couples go to the gym? Because some relationships don’t work out.",
                "I told my wife she was drawing her eyebrows too high. She looked surprised."
            ];
            response = jokes[Math.floor(Math.random() * jokes.length)];
        } else if (message.includes('tell me something interesting') || message.includes('tell me a fact')) {
            const facts = [
                "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
                "Bananas are berries, but strawberries aren’t.",
                "Octopuses have three hearts and blue blood!"
            ];
            response = facts[Math.floor(Math.random() * facts.length)];
        
        // What can you do?
        } else if (message.includes('what can you do') || message.includes('what are your capabilities')) {
            response = "I can answer your questions on HTML, CSS, JavaScript, jQuery, APIs, Digital Marketing, and UI/UX Design. I can also tell jokes and fun facts, and help with general knowledge!";
        
        // Topics: HTML, CSS, JavaScript, jQuery, API, Digital Marketing, UI/UX Design
        } else if (message.includes('html')) {
            response = "HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It structures the content on the web.";
        } else if (message.includes('css')) {
            response = "CSS (Cascading Style Sheets) controls the presentation and layout of HTML elements on the page, including colors, fonts, and spacing.";
        } else if (message.includes('javascript')) {
            response = "JavaScript is a programming language used to create interactive effects within web browsers. It's essential for dynamic web pages.";
        } else if (message.includes('jquery')) {
            response = "jQuery is a fast, small, and feature-rich JavaScript library. It simplifies HTML document traversal and manipulation, event handling, and animations.";
        } else if (message.includes('api')) {
            response = "API stands for Application Programming Interface. It's a set of protocols for building and interacting with software applications, allowing different systems to communicate.";
        } else if (message.includes('digital marketing')) {
            response = "Digital marketing is the use of digital channels, such as search engines, social media, email, and websites, to promote products and services.";
        } else if (message.includes('ui/ux design') || message.includes('user interface') || message.includes('user experience')) {
            response = "UI/UX Design refers to the process of creating user interfaces and experiences that are intuitive, efficient, and engaging for users.";

        // Default Response for unrecognized inputs
        } else {
            response = "Sorry, I didn't quite catch that. Could you rephrase or ask something else? I'm here to help with HTML, CSS, JavaScript, and more!";
        }

        // Add bot message to chat
        const chatDiv = document.getElementById('chat');
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot');
        botMessage.innerHTML = `
            <div class="text">${response}</div>
            <div class="time">${new Date().toLocaleTimeString()}</div>
        `;
        chatDiv.appendChild(botMessage);

        // Scroll to the bottom of the chat
        chatDiv.scrollTop = chatDiv.scrollHeight;
    }

    // Automatically start the conversation with an introduction message
    setTimeout(() => {
        sendBotResponse("Hi there! I'm Quily, your assistant chatbot. How can I help you today? Feel free to ask me about HTML, CSS, JavaScript, jQuery, APIs, Digital Marketing, and UI/UX Design.");
    }, 500); // Delay to simulate a typing effect or give user time to load the page
});
