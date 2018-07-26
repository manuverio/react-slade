import styled from "styled-components";

const Svg = styled.svg`
  display: inherit;
  stroke: ${props => props.isStartItem || props.isEndItem ? 'transparent' : 'white' };
  stroke-width: 7;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  cursor: ${props => props.isStartItem || props.isEndItem ? 'initial' : 'pointer' };
  transform: ${props => props.start ? 'scaleX(-1)' : 'scaleX(1)'};

  @media (max-width: 481px) {
    transform: ${props => props.start ? 'rotate(-90deg)' : 'rotate(90deg)' };
  }
`

export default Svg;