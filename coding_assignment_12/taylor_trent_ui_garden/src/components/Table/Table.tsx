import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.disabled ? "grey" : props.backgroundColor || "white"};
  cursor: ${(props) => props.disabled ? "not-allowed" : "default"};
`;

const TableHeader = styled.th`
  border: 1px solid black;
  padding: 8px;
  `;

const TableCell = styled.td`
  border: 1px solid black;
  padding: 8px;
`;

export function Table({ backgroundColor, disabled }: TableProps) {
  return (
    <StyledTable backgroundColor={backgroundColor} disabled={disabled}>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Component</TableHeader>
        </tr>
      </thead>

      <tbody>
        <tr>
          <TableCell>Trent</TableCell>
          <TableCell>Button</TableCell>
        </tr>
        <tr>
          <TableCell>Assignment 12</TableCell>
          <TableCell>StoryBook</TableCell>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <TableCell>Total</TableCell>
          <TableCell>Rows</TableCell>
        </tr>
      </tfoot>
    </StyledTable>
  );
}
