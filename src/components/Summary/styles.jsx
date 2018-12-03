import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  text-align: right;
`;

export const Date = styled.span`
  font-size: 12px;
`;

export const Excerpt = styled.div`
  margin-bottom: 15px;
`;

export const Link = styled(GatsbyLink)`
  color: #32325d;
  text-decoration: none;

  &:hover {
    color: #3498db;
  }
`;

export const Title = styled.h2`
  margin: 0 0 15px;
`;

export const Wrapper = styled.div`
  padding: 30px 0;
`;
