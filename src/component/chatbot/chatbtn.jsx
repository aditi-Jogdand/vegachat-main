import { createSignal, onCleanup } from "solid-js";

function ChatBot() {
    const [isVisible, setIsVisible] = createSignal(false);
    const [messages, setMessages] = createSignal([{ sender: "bot", text: "Hey Vega here! How can I help you, my friend?" }]);
    const [isTyping, setIsTyping] = createSignal(false);

    const toggleChat = () => setIsVisible(!isVisible());

    const sendMessage = (text) => {
        setMessages((prevMessages) => [...prevMessages, { sender: "user", text }]);
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "Hey Vega is in build stage, stay tuned!" }]);
        }, 1000); // Simulating typing delay
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
        const input = event.target.elements.message;
        const text = input.value.trim();
        if (text) {
            sendMessage(text);
            input.value = "";
        }
    };

    return (
        <>
            <div class="fixed bottom-20 right-8 z-20">
               
                <button
                    class="rounded-full bg-pink-500 p-4 text-white shadow-lg hover:bg-pink-600 focus:outline-none"
                    onClick={toggleChat}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"></path>
                        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"></path>
                    </svg>
                </button>
            </div>
            {isVisible() && (
                <div class="fixed bottom-28 right-8 z-20 w-80 bg-white shadow-lg rounded-lg">
                     <div class="rounded-lg bg-pink-600 h-10">
                        <h1 class="text-center pt-2 text-white text-xl	font-mono	">VEGA BOT</h1>
                     </div>
                    <div class="p-4">
                        <div class="h-64 overflow-y-scroll">
                            {messages().map((message, index) => (
                                <div key={index} class={`mb-2 ${message.sender === "bot" ? "text-left" : "text-right"}`}>
                                    <div class={`inline-block p-2 rounded-lg ${message.sender === "bot" ? "bg-gray-200" : "bg-pink-500 text-white"}`}>
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping() && (
                                <div class="text-left">
                                    <div class="inline-block p-2 rounded-lg bg-gray-200">
                                        <span class="typing">...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleSendMessage} class="mt-4 flex">
                            <input
                                type="text"
                                name="message"
                                placeholder="Type a message..."
                                class="flex-1 p-2 border rounded-l-lg focus:outline-none"
                            />
                            <button
                                type="submit"
                                class="bg-pink-500 text-white p-2 rounded-r-lg hover:bg-pink-600 focus:outline-none"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ChatBot;
