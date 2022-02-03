import styled, { css } from "styled-components";

export const Wrapper = styled.section``;

export const Template = styled.div`
  display: grid;
  grid-template-columns: 12rem 15rem 1.5fr 1.5fr 1fr 1fr 0.8fr 0.5fr 0.5fr;
  grid-gap: 0.5rem;
  text-align: left;
  overflow-y: scroll;
  scrollbar-width: none;
`;

export const Header = styled(Template)`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    padding: 0 1rem;
    span {
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: 500;
      opacity: 0.5;
    }
  `}
`;

export const Content = styled.div`
  display: grid;
  overflow-x: hidden;
  @media screen and (min-width: 500px) and (max-width: 1110px) {
    grid-template-columns: 1fr 1fr;
  }
`;
