import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

export const ModalSucessOrError = (position, icon, title, timer) => {
  return setTimeout(() => {
    mySwal.fire({
      position: position,
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: timer,
    });
  }, 600);
};
