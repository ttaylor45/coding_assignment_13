import styled from "styled-components";
import { CardProps } from "./Card.types";

type StyledCardProps = {
  $backgroundColor?: string;
  disabled?: boolean;
};

const StyledCard = styled.div<StyledCardProps>`
  max-width: 300px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.$backgroundColor || "white"};
  color: ${(props) => (props.disabled ? "white" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export function Card({ title, text, backgroundColor, disabled }: CardProps) {
  return (
    <StyledCard
      data-testid="card"
      $backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledCard>
  );
}
