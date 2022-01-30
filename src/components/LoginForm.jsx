import axios from "axios";
import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      "Project-ID": "ea35fcb8-5f62-4d7e-b742-9eb5a51cb5b0",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
    } catch (error) {
        setError('Ooops, maybe, you entered incorrect credentials!')
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">React Chat App by Musobek Madrimov</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username..."
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password..."
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <div className="error">{error}</div>
        </form>
      </div>
    </div>
  );
}
