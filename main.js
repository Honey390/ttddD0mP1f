import Typed from "typed.js";
import Todo from "./Todo";
import "./style.css";
import { heading } from "./src/core/selectors";


const todo = new Todo();
todo.init();

const typedHeading = new Typed(heading, {
  strings: ["Welcome To My App", "Let's try it!!"],
  typeSpeed: 80,
  loop: true,
  showCursor: false,
  bindInputFocusEvents: false,
  backDelay:2000,
  backSpeed:50
});
