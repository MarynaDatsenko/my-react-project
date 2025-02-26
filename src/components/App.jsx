//import Accordion from "./Accordion/Accordion";
//import css from "./App.module.css";
//import Reader from "./Reader/Reader";
//import articles from "../components/articles.json";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [isDark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark")
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => setIsDark(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return <div>{isDark ? "Темна тема" : "Світла тема"}</div>;
}
