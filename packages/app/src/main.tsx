import { createRoot } from "react-dom/client";
import { useState } from "react";


// Get the root element from the DOM
const container = document.getElementById("root");

// Create a root
if (container) {
  const root = createRoot(container);

  // Render your app
  root.render(
    <>
      <style href="./main.css"></style>
      <Header></Header>
    </>
  );
}

export function Header() {
  return (
    <header className="cards flex space-btw" >
      <div className="flex-col">
        <h1>Fullstack Developer</h1>
        <h2>CASSAGNE Mathys</h2>
      </div>
      <Nav></Nav>
    </header>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleMenu}>Menu</button>
      {isOpen && (
        <nav className="nav">
          <ul><a href="# "></a>Profile</ul>
          <ul><a href="# "></a>Skills</ul>
          <ul><a href="# "></a>Projects</ul>
          <ul><a href="# "></a>School</ul>
          <ul><a href="# "></a>Personal interests</ul>
        </nav>
      )}
    </div>
  );
}
