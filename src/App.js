import React from "react";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Message from "./Components/Message/Message";
import layoute from "./Components/layoute";
import TypingMessage from "./Components/TypingMessage/TypingMessage";
import userList from "./Components/UserList/UserList";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Message />
      <layoute />
      <TypingMessage />
      <userList />
    </div>
  );
}

export default App;
