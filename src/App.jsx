import React from "react";
import "./App.sass";
import NavigationBar from "./NavigationBar.jsx";
import Home from "./Home.jsx";
import ListCarousel from "./ListCarousel.jsx";
import Footer from "./FooterHomepage.jsx";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <ListCarousel />
      <Footer />
    </div>
  );
}

export default App;
