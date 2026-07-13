import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const Wrapper = styled.div<RadioButtonProps>`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "transparent"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export function RadioButton({
  label,
  backgroundColor,
  disabled,
}: RadioButtonProps) {
  return (
    <Wrapper
      label={label}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <input type="radio" disabled={disabled} />
      {label}
    </Wrapper>
  );
}
