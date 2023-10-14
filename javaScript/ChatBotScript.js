// Sample error database
const errorDatabase = [
    {
        errorMessage: "Error code ABC123: Database connection failed",
        solution: "To fix this issue, check your database credentials and ensure the database server is running."
    },
    {
        errorMessage: "Error code XYZ456: File not found",
        solution: "This error occurs when the specified file does not exist. Make sure the file path is correct."
    },
    {
        errorMessage: "Error code DEF789: Network timeout",
        solution: "If you're experiencing network timeouts, check your internet connection and ensure the server is reachable."
    },
    {
        errorMessage: "Error code GHI321: Invalid input",
        solution: "This error indicates that the input data is invalid. Double-check the input and try again."
    },
    {
        errorMessage: "Error code MNO987: Access denied",
        solution: "Access to this resource is denied. Ensure you have the necessary permissions to access it."
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const chatbot = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");

    const chatInput = document.querySelector(".chat-Input textarea");
    const sendChatbtn = document.querySelector(".chat-Input span#sendBtn");

    let userMessage;

    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        chatLi.innerHTML = `<p>${message}</p>`;
        return chatLi;
    }

    const handleChat = () => {
        userMessage = chatInput.value.trim();
        if (!userMessage) return;

        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatInput.value = '';

        // Check if the message is an error and handle it accordingly
        const chatbotResponse = handleErrorMessage(userMessage);
        chatbox.appendChild(createChatLi(chatbotResponse, "incoming"));

        // Scroll to the bottom when a new message is added
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    chatInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleChat();
        }
    });

    sendChatbtn.addEventListener("click", handleChat);
});

// Function to handle incoming error messages
function handleErrorMessage(errorMessage) {
    // Iterate through the error database to find a match
    for (const entry of errorDatabase) {
        if (errorMessage.includes(entry.errorMessage)) {
            return entry.solution;
        }
    }

    // If no match is found, provide a generic response
    return getChatbotResponse(errorMessage);
}

// Example responses based on user input
function getChatbotResponse(userMessage) {
    const responses = {
        "hello": "Hello! How can I assist you today?",
        "hi": "Hi, How is it going?",
        "how are you": "I'm just a computer program, but I'm here to help.",
        "goodbye": "Goodbye! Feel free to come back if you have more questions.",
        "default": "I'm not sure I understand. Can you please rephrase or ask another question?"
    };

    const lowercaseMessage = userMessage.toLowerCase();
    return responses[lowercaseMessage] || responses["default"];
}