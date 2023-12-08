import Swal from "sweetalert2";
import { doneCount, totalCount } from "./selectors";

// export const toast = (title, icon = "success") => {
//     const Toast = Swal.mixin({
//       toast: true,
//       position: "bottom-start",
//       showConfirmButton: false,
//       timer: 3000,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//         toast.onmouseenter = Swal.stopTimer;
//         toast.onmouseleave = Swal.resumeTimer;
//       },
//     });
//     Toast.fire({
//       icon,
//       title,
//     });
//   };

export const confirmBox = (callback) => {
  Swal.fire({
    title :"Are you sure to delete?",
    text :"You won't be able to revert this!",
    icon :"question",
    showCancelButton: true,
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
    else{
        console.log("Cancel");
    }
  });
};

export const listCounter=() => {
    const listTotal=app.querySelectorAll(".list").length;
    const listDoneTotal=app.querySelectorAll(".list-check:checked").length;
    // console.log(listTotal,listDoneTotal);
    doneCount.innerText=listDoneTotal;
    totalCount.innerText=listTotal;
}