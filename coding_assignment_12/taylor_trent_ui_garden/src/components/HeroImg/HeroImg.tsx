import styled from "styled-components";
import { HeroImgProps } from "./HeroImg.types";

type HeroWrapperProps = {
  $imageurl: string;
  disabled?: boolean;
};

const HeroWrapper = styled.div<HeroWrapperProps>`
  width: 100%;
  min-height: 300px;
  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
  background-color: ${(props) => (props.disabled ? "grey" : "transparent")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

const HeroTitle = styled.h1`
  color: white;
`;

export function HeroImg({ imageurl, title, disabled }: HeroImgProps) {
  return (
    <HeroWrapper
      data-testid="hero-image"
      $imageurl={imageurl}
      disabled={disabled}
    >
      <HeroTitle>{title}</HeroTitle>
    </HeroWrapper>
  );
}
