//              بِسْم اللَّه الرَّحْمن الرَّحِيم
//  وَعَلَّمَكَ مَا لَمْ تَكُن تَعْلَمُ ۚ وَكَانَ فَضْلُ ٱللَّهِ عَلَيْكَ عَظِيمًۭا
// const errorDatabase = [
//     {
//         errorMessage: "",
//         solution: ``
//     },
//     {
//         errorMessage: "",
//         solution: ""
//     },
//     {
//         errorMessage: "",
//         solution: ""
//     },
//     {
//         errorMessage: "",
//         solution: ""
//     },
//     {
//         errorMessage: "",
//         solution: ""
//     }
// ];

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

    // Introduce the bot when the page is loaded
    const botIntroMessage = "Hello!<br>how can i help?";
    chatbox.appendChild(createChatLi(botIntroMessage, "incoming"));

    const handleChat = () => {
        userMessage = chatInput.value.trim();
        if (!userMessage) return;

        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatInput.value = '';
        adjustTextareaHeight(); // Adjust textarea height after sending a message

        const chatbotResponse = handleErrorMessage(userMessage);
        chatbox.appendChild(createChatLi(chatbotResponse, "incoming"));
        adjustTextareaHeight(); // Adjust textarea height after receiving a message

        chatbox.scrollTop = chatbox.scrollHeight;
    }

    const adjustTextareaHeight = () => {
        chatInput.style.height = "auto";
        chatInput.style.height = (chatInput.scrollHeight) + "px";
    }

    chatInput.addEventListener("input", adjustTextareaHeight); // Adjust textarea height while typing

    chatInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleChat();
        }
    });

    sendChatbtn.addEventListener("click", handleChat);

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
            "hi": "Hi! How is it going today?",
            "how are you": "I'm just a computer program, but I'm here to help.",
            "goodbye": "Goodbye!",
            "default": "I'm not sure I understand. Can you please rephrase or ask another question?",
            "acp": `Get the Approval letter: getinternet.gov,
            <br>
            get the benefit with Optimum: optimum.com/acpapp,
            <br>
            for questions about eligibility or the verification process,
            <br>
            (888)891-2189,
            <br>
            <hr>
            if he/she want need any help with something like the below,
            <br>
            1- The status of your ACP application,
            <br>
            2- Documents needed to show if he/she qualify,
            <br>
            3- Assistance with the ACP Household Worksheet,
            <br>
            4- Resetting the account.
            <br>
            call the ACP Support Center at (877)384-2575
            <br>
            (7 days a week, from 9:00 a.m. to 9:00 p.m. ET)
            <br>
            <hr>
            or E-mail ACPSupport@usac.org.
            `
        };

        const lowercaseMessage = userMessage.toLowerCase();
        return responses[lowercaseMessage] || responses["default"];
    }
});
