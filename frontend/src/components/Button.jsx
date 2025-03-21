import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
  return (
    <StyledWrapper>
      <button className="button">
        <svg
          id="UploadToCloud"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          width="16px"
          className="icon"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            className="color000000 svgShape"
            fill="#000000"
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
          />
        </svg>
        {title}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @media (max-width: 450px) {
    .button {
      font-size: 10px;
    }
    .icon {
      margin-right: 0px;
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: linear-gradient(45deg, #ffc75d, #ffc708);
    box-shadow: 0 0 24px #ffb20861;
    border: 2px solid #ffe825;
    border-radius: 100px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease,
      text-shadow 0.3s ease;
    padding: 10px 20px;
    color: #09090b;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Text drop shadow */
  }

  .button:hover {
    background-color: #ffc75d !important;
    box-shadow: 0 0 34px #ffb20861 !important;
    text-shadow: 0 0 4px #ffe825; /* Hover text shadow */
    border-color: #ffe825 !important;
  }

  .icon {
    margin-right: 5px;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3)); /* Icon drop shadow */
  }
`;

export default Button;
