import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 30px 15px;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default Wrapper;