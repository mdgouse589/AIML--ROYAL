import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const businessHours = {
    start: 9,
    end: 18,
    timezone: 'IST'
  };

  const quickReplies = [
    "Admission requirements",
    "Course information",
    "Fee structure",
    "Campus facilities",
    "Placement statistics"
  ];

  useEffect(() => {
    // Check if it's business hours
    const now = new Date();
    const currentHour = now?.getHours();
    setIsOnline(currentHour >= businessHours?.start && currentHour < businessHours?.end);

    // Initialize with welcome message
    if (messages?.length === 0) {
      const welcomeMessage = {
        id: 1,
        type: 'bot',
        content: isOnline 
          ? "Hello! I'm here to help you with any questions about GM University's AIML Branch. How can I assist you today?" :"Hello! Our support team is currently offline. Please leave a message and we'll get back to you during business hours (9 AM - 6 PM IST).",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage?.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput?.toLowerCase();
    let response = "Thank you for your question. Let me connect you with a human agent who can provide detailed information about this topic.";

    if (input?.includes('admission') || input?.includes('apply')) {
      response = "For admissions, you can visit our Admissions Gateway or contact our Admissions Coordinator at admissions@gmuniversity.edu.in. The application deadline for 2025 is May 31st.";
    } else if (input?.includes('fee') || input?.includes('cost')) {
      response = "Our fee structure varies by program. For detailed fee information, please contact our Admissions Office at +91-80-2345-6789 or visit the admissions section on our website.";
    } else if (input?.includes('placement') || input?.includes('job')) {
      response = "Our AIML branch has an excellent placement record with 95% placement rate. Top recruiters include Google, Microsoft, Amazon, and leading Indian tech companies. Average package is ₹12 LPA.";
    } else if (input?.includes('course') || input?.includes('curriculum')) {
      response = "Our curriculum covers Machine Learning, Deep Learning, Computer Vision, NLP, and Data Science. We use Python, TensorFlow, PyTorch, and cloud platforms. Would you like specific course details?";
    }

    return {
      id: Date.now() + 1,
      type: 'bot',
      content: response,
      timestamp: new Date()
    };
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
  };

  const formatTime = (timestamp) => {
    return timestamp?.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
            isOpen 
              ? 'bg-gray-600 hover:bg-gray-700' :'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary btn-pulse'
          }`}
        >
          <Icon 
            name={isOpen ? "X" : "MessageCircle"} 
            size={24} 
            className="text-white" 
          />
        </button>
        
        {/* Online Status Indicator */}
        {!isOpen && (
          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            isOnline ? 'bg-emerald-500' : 'bg-gray-400'
          }`} />
        )}
      </div>
      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 w-80 h-96 bg-white rounded-xl shadow-royal-lg border border-gray-200 z-50 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform translate-y-4'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-primary to-primary/90 text-white rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Bot" size={16} />
              </div>
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-white ${
                isOnline ? 'bg-emerald-500' : 'bg-gray-400'
              }`} />
            </div>
            <div>
              <p className="font-medium">AIML Support</p>
              <p className="text-xs opacity-90">
                {isOnline ? 'Online now' : 'Offline'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
          >
            <Icon name="Minimize2" size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
          {messages?.map((message) => (
            <div
              key={message?.id}
              className={`flex ${message?.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message?.type === 'user' ?'bg-primary text-white' :'bg-gray-100 text-gray-900'
              }`}>
                <p>{message?.content}</p>
                <p className={`text-xs mt-1 ${
                  message?.type === 'user' ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {formatTime(message?.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Replies */}
        {messages?.length <= 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1">
              {quickReplies?.slice(0, 3)?.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
            />
            <Button
              variant="default"
              size="sm"
              onClick={handleSendMessage}
              disabled={!inputMessage?.trim()}
              iconName="Send"
              className="bg-primary hover:bg-primary/90"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChatWidget;