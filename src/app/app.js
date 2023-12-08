import { listTemplate, textInput } from "../core/selectors";

export const showInput = (x) => {
  const list = listTemplate.content.cloneNode(true);
  const listText = list.querySelector(".listText");
  if(x.value===null){
    textInput.classList.add("required")
  }
  else{
    listText.innerText=textInput.value;
  }
 

  return list;
};
