import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatContainer from "./components/ChatContainer";
import ThemeToggler from "./components/ThemeToggler";
import Header from "./components/Header";

function App() {
  const [messages, setMessages] = useState([]);
  const BACKEND_URL = process.env.BACKEND_URL;

  const fetchMessages = async () => {
    try {
      const response = await axios.get(BACKEND_URL);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async (username, messageToSend) => {
    if (!username || !messageToSend) {
      console.log(
        "Either username or message is empty:",
        username,
        messageToSend
      );
      return;
    }
    try {
      const message = messageToSend;
      await axios.post(BACKEND_URL, { username, message });
      fetchMessages(); // Fetch messages after sending a new message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    fetchMessages(); // Fetch messages when component mounts

    const interval = setInterval(() => {
      fetchMessages(); // Fetch messages every 6 seconds
    }, 6000);

    // Clean up function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg">
      <Header />
      <div className="wrapper">
        <ChatContainer messages={messages} sendMessage={sendMessage} />
        <ThemeToggler />
      </div>
    </div>
  );
}

export default App;
