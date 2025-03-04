//import Accordion from "./Accordion/Accordion";
//import css from "./App.module.css";
//import Reader from "./Reader/Reader";
//import articles from "../components/articles.json";
//import { useEffect, useState } from "react";
//import LoginForm from "./LoginForm";
//import SearchBar from "./SearchBar";
import LangSwitcher from "./LangSwitcher";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [lang, setLang] = useState("uk");
  return (
    <>
      <p>Selected language: {lang} </p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </>
  );
}
