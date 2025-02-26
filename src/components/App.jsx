//import Accordion from "./Accordion/Accordion";
import css from "./App.module.css";
import Reader from "./Reader/Reader";
import articles from "../components/articles.json";

const accordionItems = [
  {
    title: "How does an accordion work?",
    content:
      "An accordion allows users to toggle the display of sections of content.",
  },
  {
    title: "What are the benefits of using an accordion?",
    content:
      "Accordions are useful for organizing content and reducing clutter on a page.",
  },
  {
    title: "Can an accordion be styled to match a website's design?",
    content:
      "Yes, accordions can be styled using CSS to match the design of a website.",
  },

  {
    title: "How to create an accordion in React?",
    content:
      "To create an accordion in React, you can use state to manage the open and closed state of each section.",
  },

  {
    title: "What is the state in React?",
    content:
      "State is a built-in feature in React that allows components to manage and update their own data.",
  },
];

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>State in React</h1>

      <Reader items={articles} />
      {/*<Accordion items={accordionItems} />*/}
    </div>
  );
}
