//import Accordion from "./Accordion/Accordion";
//import css from "./App.module.css";
//import Reader from "./Reader/Reader";
//import articles from "../components/articles.json";
//import { useEffect, useState } from "react";
//import LoginForm from "./LoginForm";
//import SearchBar from "./SearchBar";
//import LangSwitcher from "./LangSwitcher";
import { useState } from "react";
//import "./styles.css";

export default function App() {
  const [coffeeSize, setCoffeeSize] = useState("sm");

  const handleChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  return (
    <>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleChange}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleChange}
        />
        Large
      </label>
    </>
  );
}
