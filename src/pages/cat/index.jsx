// crete build with npm run build

import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { Phone } from "lucide-react";
import { MoreVertical } from "lucide-react";
import { Search } from "lucide-react";
import { Clock } from "lucide-react";
import { Video } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

const ChatApp = () => {
  // Sample user data
  const currentUser = {
    id: "receiver_123",
    name: "John Smith",
    type: "receiver",
    bloodType: "A+"
  };

  const donor = {
    id: "donor_456",
    name: "Sarah Johnson",
    type: "donor",
    bloodType: "A+",
    lastActive: "2 min ago"
  };

  // Chat state
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem(`chat_${currentUser.id}_${donor.id}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Sample initial messages
      const initialMessages = [
        {
          id: 1,
          sender: "donor_456",
          text: "Hello! I saw that you're looking for an A+ blood donor.",
          timestamp: "2024-01-08T10:00:00"
        },
        {
          id: 2,
          sender: "receiver_123",
          text: "Yes, I need a donor for my father's surgery next week.",
          timestamp: "2024-01-08T10:01:00"
        },
        {
          id: 3,
          sender: "donor_456",
          text: "I'm available to help. Could you provide more details about the requirements?",
          timestamp: "2024-01-08T10:02:00"
        }
      ];
      setMessages(initialMessages);
      localStorage.setItem(`chat_${currentUser.id}_${donor.id}`, JSON.stringify(initialMessages));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`chat_${currentUser.id}_${donor.id}`, JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: Date.now(),
        sender: currentUser.id,
        text: newMessage.trim(),
        timestamp: new Date().toISOString()
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: "2-digit", 
      minute: "2-digit"
    });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b px-4 py-3">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">{donor.bloodType}</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h2 className="text-lg font-semibold">{donor.name}</h2>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {donor.lastActive}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Video className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4" ref={chatContainerRef}>
        <div className="container mx-auto max-w-4xl space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === currentUser.id ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] ${
                  message.sender === currentUser.id
                    ? "bg-red-600 text-white rounded-l-lg rounded-tr-lg"
                    : "bg-white text-gray-800 rounded-r-lg rounded-tl-lg"
                } p-3 shadow-sm`}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === currentUser.id ? "text-red-100" : "text-gray-500"
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <div className="container mx-auto max-w-4xl">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition"
              disabled={!newMessage.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
