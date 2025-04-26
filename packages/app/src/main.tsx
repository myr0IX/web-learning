import { createRoot } from "react-dom/client";
import { useState } from "react";

import styles from "./Main.module.css";
console.log(styles);

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
    <header className={styles.flex}>
      <div className={styles["flex-col"]}>
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
    <>
      <button onClick={toggleMenu}>Menu</button>
      {isOpen && (
        <ol>
          <ul>Profile</ul>
          <ul>Skills</ul>
          <ul>Projects</ul>
          <ul>School</ul>
          <ul>Personal interests</ul>
        </ol>
      )}
    </>
  );
}
