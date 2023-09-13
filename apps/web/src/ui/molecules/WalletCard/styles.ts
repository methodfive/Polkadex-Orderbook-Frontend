import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    small {
      font-size: 1.2rem;
      opacity: 0.5;
    }
    p {
      white-space: nowrap;
      font-size: 1.9rem;
      font-weight: 500;
      span {
        opacity: 0.5;
      }
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    div {
      background: ${theme.colors.secondaryBackgroundOpacity};
      border-radius: 0.5rem;
      width: 2.3rem;
      height: 2.3rem;
      padding: 0.5rem;
      svg {
        stroke: ${theme.colors.tertiaryText};
      }
    }
    p {
      font-size: 1.2rem;
    }
    span {
      color: ${theme.colors.tertiaryText};
    }
  `}
`;
