import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<DropdownProps>`
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "white"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export function Dropdown({
  options,
  backgroundColor,
  disabled,
}: DropdownProps) {
  return (
    <StyledSelect
      options={options}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}
