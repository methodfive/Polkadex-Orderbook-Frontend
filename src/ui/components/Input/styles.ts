import styled, { css } from "styled-components";

import { Props } from "./types";

import { Wrapper as WrapperButton } from "src/ui/molecules/Button/styles";
import { WrapperIcon } from "src/ui/atoms/Icon/styles";

export const Wrapper = styled.div<Pick<Props, "background">>`
  ${({ theme, background }) => css`
    background: ${theme.colors[background]};
    border-radius: 1.5rem;
    padding: 1.2rem;
    & label {
      opacity: 0.7;
      margin-bottom: 0.5rem;
    }
    & input {
      font-weight: 500;
      color: ${theme.colors.text};
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  & ${WrapperIcon} {
    margin-right: 0.5rem;
    opacity: 0.5;
  }
`;

export const OrderInputHeader = styled.div`
  ${({ theme }) => css`
    text-align: right;

    font-size: ${theme.font.sizes.small};
    & strong {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
export const OrderInputContent = styled.div`
  & label {
    opacity: 0.8;
    margin-bottom: 0.7rem;
  }
`;
export const OrderInputContentData = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    & input {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.text};
      width: 100%;
    }
    & span {
      display: block;
    }
  `}
`;

export const OrderInputContentActions = styled.div`
  ${({ theme }) => css`
    :first-child {
      opacity: 0.7;
      margin-top: 0.5rem;

      & span {
        font-size: ${theme.font.sizes.xsmall};
        margin-top: 0.6rem;
      }
    }
    :last-child {
      display: flex;
      ${WrapperButton} {
        margin: 0.5rem 0.5rem 0 0;
      }
      div :last-child {
        background: ${theme.colors.secondaryBackground};
        padding: 1rem;
        border-radius: 1.5rem;

        & span {
          font-weight: 600;
          font-size: ${theme.font.sizes.medium};
        }
        & button {
          font-size: ${theme.font.sizes.xsmall};
          margin-top: 1rem;
          opacity: 0.5;
        }
      }
    }
  `}
`;
export const OrderInputFooter = styled.div`
  margin-top: 1rem;
`;

// Slider
export const WrapperSlider = styled.div``;
export const WalletInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & input {
    width: 100%;
  }
`;
