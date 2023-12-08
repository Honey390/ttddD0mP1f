import { addBtnHandler,  listGroupHandler, textInputHandler } from "./handler";
import { addBtn,  listGroup,  textInput } from "./selectors";

const listeners=() => {
    addBtn.addEventListener("click",addBtnHandler);
    textInput.addEventListener("keyup",textInputHandler);
    listGroup.addEventListener("click",listGroupHandler)
   
    
}
export default listeners;