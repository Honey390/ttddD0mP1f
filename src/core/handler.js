import { showInput } from "../app/app";
import { confirmBox, listCounter } from "./function";
import { app, editTemplate, listGroup, textInput } from "./selectors";

export const addBtnHandler = () => {
  console.log("click");
  listGroup.append(showInput(textInput.value));
  textInput.value = null;
  listCounter();
};

export const textInputHandler = (event) => {
  if (event.key === "Enter") {
    listGroup.append(showInput(textInput.value));
    textInput.value = null;
    listCounter();
  }
};

export const listGroupHandler = (event) => {
  // const list = listTemplate.content.cloneNode(true);
  // console.log(event.target);
  if (event.target.classList.contains("list-del")) {
    console.log("delete Btn");

    confirmBox(() => {
      const list = event.target.closest(".list");
      list.classList.add(
        "animate__animated",
        "animate__fadeOutRight",
        "duration-500"
      );
      list.addEventListener("animationend", () => {
        list.remove();
        listCounter();
      });
    });
  } else if (event.target.classList.contains("edit-btn")) {
    const listText = listGroup.querySelector(".listText");
    const currentText = listText.innerText;
    const editUi = editTemplate.content.cloneNode(true);
    const editInput = editUi.querySelector(".edit-input");
    listText.innerText = null;
    listText.append(editInput);

    editInput.focus();
    editInput.value = currentText;
    editInput.addEventListener("blur", () => {
      listText.innerText = editInput.value;
    });
  } else if (event.target.classList.contains("list-check")) {
    const list = event.target.closest(".list");
    list.querySelector(".listText").classList.toggle("line-through");
    listGroup.querySelector(".list-check").toggleAttribute("checked");
    listGroup.querySelector(".list-check").classList.add("focus:ring-0");
    listGroup.querySelector(".list-check").classList.add("accent-gray-700");

    list.querySelector(".edit-btn").toggleAttribute("disabled");
    listCounter();
  }
};
