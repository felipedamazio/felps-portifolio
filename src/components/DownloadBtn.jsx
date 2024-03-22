import { ArrowDownCircle } from "react-bootstrap-icons";

export function DownloadBtn(props) {
  return (
    <div>
      <a href={props.urlFile} download={props.nameFile}>
        <button>
          {props.text} <ArrowDownCircle size={25} />
        </button>
      </a>
    </div>
  );
}
