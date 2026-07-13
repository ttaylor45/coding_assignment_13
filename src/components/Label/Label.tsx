import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 4px;
  color: white;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "green"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export function Label({ text, backgroundColor, disabled }: LabelProps) {
  return (
    <StyledLabel
      text={text}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {text}
    </StyledLabel>
  );
}
