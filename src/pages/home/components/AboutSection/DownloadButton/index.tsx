import Cv from "../../../../../assets/download-cv-button/Curriculo.pdf";
import DownloadIcon from "../../../../../assets/download-cv-button/file-download.svg";
import "./styles.css";

function DownloadButton() {
  return (
    <a href={Cv} style={{ textDecoration: "none", color: "inherit" }}>
      <button className="button" type="button">
        {"Baixar CV"} <img src={DownloadIcon} alt="arquivo download ícone" />
      </button>
    </a>
  );
}

export default DownloadButton;
