import { ArrowDownCircle } from "react-bootstrap-icons";
import { ModalSucessOrError } from "./ModalSucessOrError";


const modalSucess = () => {
  ModalSucessOrError("center","success", "CV downloaded successfully!", 3000);
};

export function DownloadBtn(props) {
  return (
    <div>
      <a onClick={modalSucess} href={props.urlFile} download={props.nameFile}>
        <button>
          {props.text} <ArrowDownCircle size={25} />
        </button>
      </a>
    </div>
  );
}

