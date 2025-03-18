import './style.css'
import ResumePDF from '../../assets/C.V_FABIEN_JÉGO.pdf'

import styled from 'styled-components';

export function ButtonCv(){
  const handleDownload = () => {
    window.open(ResumePDF);
  };
  return (
    <StyledWrapper>
      <button className="btn-shine"  onClick={handleDownload}>
        <span>Mon C.V</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    margin: 0;
    padding: 17px 35px;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #68e0cf;
    border: 1px solid #68e0cf;
    border-radius: 1REM;
    color:#68e0cf;
    font-weight: 400;
    font-family: inherit;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  }

  button span {
    color: white;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.7px;
  }

  button:hover {
    animation: rotate624 0.7s ease-in-out both;
  }

  button:hover span {
    animation: storm1261 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }

  @keyframes rotate624 {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }

    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }

    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }

    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }

    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }

  @keyframes storm1261 {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }

    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }

    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }

    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }

    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }

  .btn-shine {
    border: 1px solid;
    overflow: hidden;
    position: relative;
  }

  .btn-shine span {
    z-index: 20;
  }

  .btn-shine:after {
    background: white;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  .btn-shine:hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }`;

