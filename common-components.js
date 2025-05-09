import styled from "styled-components";

const HighlightTitle = styled.span`
  position: relative;
  font-size: 1rem;
  font-weight: bold;
  color: var(--title-color);
  opacity: 0.85;

  &::after {                 /* 형광펜 */
    content: "";
    position: absolute;
    left: -0.3em;
    right: -0.3em;
    bottom: 0.18em;
    height: 0.9em;
    background:rgb(205, 227, 172);
    border-radius: 0.12em;
    transform: skewX(-6deg);
    z-index: -1;
  }
`;

export default HighlightTitle;