import './style.css'
import ResumePDF from '../../assets/CV.pdf'

export function ButtonCv(){
  const handleDownload = () => {
    const icon = document.querySelector(".fa-download");
    if (icon) {
      icon.classList.add("rotate");
    }
    window.open(ResumePDF);
  };
    return (
<button className="btn-53">
  <div className="original">Button</div>
  <div className="letters" onClick={handleDownload}>
    
    <span>M</span>
    <span>O</span>
    <span>N</span>
    <span></span>
    <span>C</span>
    <span>V</span>
  </div>
</button>

    )
}