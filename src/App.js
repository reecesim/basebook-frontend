import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatContainer from "./components/ChatContainer";
import ThemeToggler from "./components/ThemeToggler";
import Header from "./components/Header";
import Ad1 from "./assets/img/ads/BaseBook.png";
import Ad2 from "./assets/img/ads/BaseBook 2.png";
import Ad3 from "./assets/img/ads/BaseBook 3.png";
import Ad4 from "./assets/img/ads/BaseBook 4.png";
import Ad5 from "./assets/img/ads/BaseBook 5.png";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [messages, setMessages] = useState([]);
  const BACKEND_URL = "https://basebook-backend.onrender.com/messages";

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
    }, 1500);

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
      <div className="sidebar sidebar-left">
        <a href="/" rel="noopener" target="_blank">
          <img src={Ad1} alt="Basebook arousing tokenomics" />
        </a>
        <img src={Ad2} alt="Basebook members capture SBF and deliver justice" />
      </div>
      <div className="sidebar sidebar-right">
        <img src={Ad4} alt="Zuck leaked snapchats" />
        <img src={Ad5} alt="Number 1 social-fi on BASE" />
        <img src={Ad3} alt="Zuck's Looksmaxxing routine goes horribly wrong" />
      </div>
      <SplashScreen></SplashScreen>
    </div>
  );
}

export default App;
