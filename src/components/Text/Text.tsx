import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<TextProps>`
  padding: 10px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "transparent"};
  color: ${(props) => (props.disabled ? "white" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export function Text({ text, backgroundColor, disabled }: TextProps) {
  return (
    <StyledText
      text={text}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {text}
    </StyledText>
  );
}
