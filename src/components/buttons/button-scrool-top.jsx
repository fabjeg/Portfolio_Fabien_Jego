import './style.css'

export function ButtonScrollTop(){
    return(
<button className='button-scroll-top'>
  <div className="text">
    <span>Back</span>
    <span>to</span>
    <span>top</span>
  </div>
  <div className="clone">
    <span>Back</span>
    <span>to</span>
    <span>top</span>
  </div>
  <svg
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
  >
    <path
      d="M14 5l7 7m0 0l-7 7m7-7H3"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
</button>

    )
}