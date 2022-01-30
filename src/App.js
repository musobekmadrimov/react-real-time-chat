import React from "react";
import { ChatEngine } from "react-chat-engine";
import MyChatFeed from "./components/MyChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

export default function App() {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="ea35fcb8-5f62-4d7e-b742-9eb5a51cb5b0"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <MyChatFeed {...chatAppProps} />}
    />
  );
}
