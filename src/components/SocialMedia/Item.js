import styled from 'styled-components';
import { textColour, mainColour } from '../../variables';

const Item = styled.li`
  display: inline-block;
  margin: 5px;

  svg {
    fill: ${textColour};
    height: 30px;
    width: 30px;

    &:hover {
      fill: ${mainColour};
    }
  }
`;

export default Item;