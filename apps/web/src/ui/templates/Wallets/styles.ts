import styled, { css } from "styled-components";
import { Wrapper as Checkbox } from "@polkadex/orderbook-ui/molecules/Checkbox/styles";
export const Main = styled.main`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.primaryBackground};
    height: 100vh;
    display: flex;
    box-shadow: 0px -36px 99px rgba(0, 0, 0, 0.15);
    flex-direction: column;
  `}
`;

export const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  overflow: hidden;
  @media screen and (min-width: 590px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex: 1;
    border-left: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    @media screen and (min-width: 590px) {
      margin-left: 2rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    border-right: 1px solid ${theme.colors.secondaryBackgroundOpacity};
  `}
`;

export const ContainerMain = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    max-width: 140rem;
    border-right: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    @media screen and (max-width: 1100px) {
      flex-direction: column;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 2rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 500;
    }
    h2 {
      font-size: ${theme.font.sizes.small};
      font-weight: normal;
      opacity: 0.5;
    }
    @media screen and (min-width: 1110px) {
      padding: 4rem;
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h2 {
    font-size: 1.6rem;
    font-weight: 550;
  }
`;

export const Wallet = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    background: ${theme.colors.clearBackgroundOpacity};
  `}
`;

export const WalletTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    padding: 1.5rem 2rem;
    h2 {
      font-size: 1.7rem;
      font-weight: 550;
    }
    @media screen and (min-width: 1110px) {
      padding: 1.5rem 4rem;
    }
  `}
`;

export const WalletContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: ${theme.colors.tertiaryBackgroundOpacity};
  `}
`;
export const Disclaimer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.tertiaryBackgroundOpacity};
    padding: 2rem;
    @media screen and (min-width: 1110px) {
      padding: 2rem 4rem;
    }
  `}
`;

export const WalletContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-height: 40rem;
    padding: 0 2rem;
    overflow-y: auto;
    @media screen and (min-width: 1110px) {
      padding: 0 4rem;
    }
    &::-webkit-scrollbar-thumb {
      background: none;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &:hover {
      &::-webkit-scrollbar-thumb {
        background: ${theme.colors.secondaryBackground};
      }

      &::-webkit-scrollbar-track {
        background: ${theme.colors.secondaryBackgroundOpacity};
      }
    }
  `}
`;

export const WalletWrapper = styled.div``;
export const AccountHeaderFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    button {
      &:nth-child(1) {
        background: ${theme.colors.secondaryBackground} !important;
        &:hover {
          background: ${theme.colors.secondaryBackgroundOpacity} !important;
        }
      }
    }
  `}
`;

export const ButtonWallet = styled.button`
  ${({ theme }) => css`
    border-radius: 0.8rem;
    padding: 0.8rem;
    font-weight: 550;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    transition: background-color 0.5s ease-in;
    &:hover {
      background: ${theme.colors.primary}33;
    }
    div {
      display: inline-block;
      border: 1.8px solid ${theme.colors.white};
      border-radius: 0.4rem;
      vertical-align: middle;
      margin-right: 0.5rem;
      padding: 0.4rem;
      width: 1.8rem;
    }
  `}
`;

export const WalletTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    white-space: nowrap;
  }
`;

export const TooltipHeader = styled.div`
  ${({ theme }) => css`
    width: 1.5rem;
    background: ${theme.colors.secondaryBackground};
    border-radius: 10rem;
    padding: 0.3rem;
  `}
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const EmptyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    max-width: 40rem;
    margin: 0 auto;
    text-align: center;
    p {
      line-height: 1.5;
      margin-top: 0.5rem;
      color: ${theme.colors.tertiaryText};
    }
    span {
      font-size: 1.5rem;
      font-weight: 550;
    }
    div {
      background: ${theme.colors.secondaryBackground};
      border-radius: 0.5rem;
      width: 4rem;
      padding: 0.8rem;
      border-radius: 1rem;
    }
  `}
`;

export const Account = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    background: ${theme.colors.clearBackgroundOpacity};
  `}
`;
export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const AccountCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    padding: 2rem;
    gap: 2rem;
    @media screen and (min-width: 1110px) {
      padding: 2rem 4rem;
    }
  `}
`;
export const AccountCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const AccountCardAvatar = styled.div`
  width: 4.5rem;
  height: 4.5rem;
`;

export const AccountCardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    span {
      font-weight: 500;
    }
    p {
      color: ${theme.colors.tertiaryText};
    }
  `}
`;
export const AccountCardFlex = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    div {
      width: 1rem;
      svg {
        fill: ${theme.colors.tertiaryText};
        stroke: ${theme.colors.tertiaryText};
      }
    }
  `}
`;
export const AccountCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Badge = styled.div<{ isRegistered: boolean }>`
  ${({ theme, isRegistered }) => css`
    background: ${isRegistered
      ? `${theme.colors.green}33`
      : theme.colors.secondaryBackground};
    border-radius: 0.3rem;
    padding: 0.5rem 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 10rem;
    font-size: 1.2rem;
    font-weight: 500;
    user-select: none;
    ${isRegistered &&
    css`
      div {
        vertical-align: middle;
        width: 1.3rem;
        background: ${theme.colors.green};
        border-radius: 10rem;
        padding: 0.3rem;
        svg {
          fill: ${theme.colors.white};
          stroke: ${theme.colors.white};
        }
      }
    `}
  `}
`;

export const Registered = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    border-left: 2px solid ${theme.colors.primary};
    border-right: 2px solid ${theme.colors.primary};
    background: ${theme.colors.primary}33;
    border-radius: 0.5rem;
    padding: 2rem;
    user-select: none;
    div {
      &:first-child {
        padding: 0.4rem;
        border: 1px solid ${theme.colors.primary};
        border-radius: 10rem;
        width: 2rem;
        svg {
          fill: ${theme.colors.primary};
        }
      }
      &:last-child {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        span {
          font-size: 1.4rem;
          display: block;
          font-weight: 550;
        }
        p {
          opacity: 0.8;
        }
      }
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
    padding: 2rem;
    border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    @media screen and (min-width: 1110px) {
      padding: 2rem 4rem;
    }
  `}
`;

export const AccountHeaderTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  div {
    width: 0.8rem;
  }
`;

export const AccountHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  label,
  span {
    white-space: nowrap;
    font-size: 1.2rem;
  }
  ${Checkbox} {
    align-items: center;
  }
`;

export const Filters = styled.div``;

export const Using = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.green}33;
    color: ${theme.colors.green};
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 550;
    border-radius: 10rem;
  `}
`;

export const WalletCard = styled.div<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;
    min-height: 6rem;
    padding-bottom: 2rem;

    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    }
    ${!isActive &&
    css`
      opacity: 0.5;
      transition: opacity 0.2s ease-in;
      &:hover {
        opacity: 1;
      }
    `}
  `}
`;

export const WalletCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const WalletCardAside = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const WalletCardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    span {
      font-weight: 550;
    }
    small {
      font-size: 1.2rem;
      font-weight: normal;
    }
    p {
      color: ${theme.colors.tertiaryText};
    }
  `}
`;

export const WalletCardCopy = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    button {
      width: 1rem;
      svg {
        fill: ${theme.colors.tertiaryText};
        stroke: ${theme.colors.tertiaryText};
      }
    }
  `}
`;

export const WalletCardBadge = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    color: ${theme.colors.tertiaryText};
    border-radius: 0.3rem;
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 10rem;
    font-size: 1.2rem;
    font-weight: 500;
    user-select: none;
  `}
`;

export const Button = styled.button<{ fill?: string }>`
  ${({ theme, fill = "secondaryBackground" }) => css`
    background: ${theme.colors[fill]};
    border-radius: 0.3rem;
    padding: 0.5rem;
    font-weight: 500;
    font-size: 1.3rem;
    transition: background-color 0.4s ease-in-out;
    &:hover {
      background: ${theme.colors.secondaryBackgroundOpacity};
    }
  `}
`;
export const Preview = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    height: 2.6rem;
    padding: 0.5rem;
    border-radius: 10rem;
    transition: 0.2s background-color ease;
    width: fit-content;
    span {
      display: none;
      width: 0;
    }
    div {
      height: 1.2rem;
      svg {
        fill: ${theme.colors.text};
        stroke: ${theme.colors.text};
        width: auto;
      }
    }

    &:hover {
      background: ${theme.colors.secondaryBackground};
      span {
        display: block;
        width: auto;
      }
    }
  `}
`;

export const WalletActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: 0.2s ease;
    a {
      background: ${theme.colors.secondaryBackground};
      border-radius: 0.3rem;
      padding: 0.3rem 0.5rem;
      font-weight: 500;
      font-size: 1.3rem;
      transition: background-color 0.4s ease-in-out;
      &:hover {
        background: ${theme.colors.secondaryBackgroundOpacity};
      }
    }
  `}
`;
export const Dropdown = styled.div`
  small {
    font-size: 1.3rem;
  }
`;

export const LoadingWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    z-index: 20;
    height: 30rem;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.tertiaryBackgroundOpacity};
  `}
`;

export const Support = styled.div`
  display: flex;
  @media screen and (min-width: 1100px) {
    flex-direction: column;
    max-width: 35rem;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SupportCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    padding: 3rem;
    @media screen and (max-width: 1100px) {
      flex: 1;
    }
    p {
      opacity: 0.6;
      line-height: 1.5;
    }
    h4 {
      font-size: 1.7rem;
      font-weight: 500;
    }
    a,
    button {
      background: ${theme.colors.secondaryBackgroundOpacity};
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      transition: background-color 0.5s ease;
      white-space: nowrap;
      width: fit-content;
      &:disabled {
        background: gray;
        cursor: not-allowed;
      }
      &:hover:not(:disabled) {
        background: ${theme.colors.secondaryBackground};
      }
      &:active:not(:disabled) {
        background: ${theme.colors.primary};
      }
    }
    border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    &:first-child {
      @media screen and (max-width: 1100px) {
        border-right: 1px solid ${theme.colors.secondaryBackgroundOpacity};
      }
    }
  `}
`;

export const SupportCardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
      width: 3rem;
      height: 3rem;
      padding: 0.6rem;
      border-radius: 50rem;
      background: ${theme.colors.secondaryBackgroundOpacity};
      margin-bottom: 1rem;
    }
  `}
`;

export const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  span {
    font-size: 1.8rem;
    font-weight: 500;
  }
  p {
    line-height: 1.4;
    opacity: 0.7;
    font-size: 1.4rem;
  }
`;
