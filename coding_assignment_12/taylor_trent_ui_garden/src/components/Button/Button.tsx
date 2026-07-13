import styled from "styled-components";
import { ButtonProps } from "./Button.types";


const StyledButton = styled.button<ButtonProps>`
padding: 10px 20px;
border: none;
border-radius: 5px;
color: white;
background-color: ${(props) => props.disabled ? "grey" : props.backgroundColor || "blue"};
cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export function Button({ text, backgroundColor, disabled, onClick }: ButtonProps) {
  return (
    <StyledButton
      text={text}
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {text}
    </StyledButton>
  );
  }
