import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  width: 100%;
  height: auto;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => (props.disabled ? "grey" : "transparent")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export function Img({ src, alt, disabled }: ImgProps) {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
}
