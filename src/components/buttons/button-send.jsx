import { useTranslation } from "react-i18next";
import styled from 'styled-components';

export function ButtonSend () {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <button> {t('envoyer')}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 15px 30px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #68e0cf;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid #68e0cf;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0#68e0cf;
  }

  button:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #68e0cf;
  }

  button:active {
    transform: scale(0.9);
  }`;

