import './style.css'

  
  export function ButtonScrollTop(){
  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
    return(
<div className="container_mouse">
    <span className="mouse-btn" onClick={scrollToTop}>
        <span className="mouse-scroll"></span>
    </span>
    <span>Scroll Top</span>
</div>
    )
}