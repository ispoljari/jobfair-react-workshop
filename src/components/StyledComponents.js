import styled, { css } from "styled-components";
import { PAGES } from "../pages";

export const Container = styled.div`
  display: ${(props) => (!!props.display ? props.display : "block")};
  align-items: ${(props) => (!!props.alignItems ? props.alignItems : "center")};

  ${(props) => {
    if (!!props.pd) {
      return css`
        padding: ${(props) => props.pd};
      `;
    } else if (!!props.pdH) {
      return css`
        padding: ${(props) => `0 ${props.pdH}`};
      `;
    } else {
      return css`
        padding: 0;
      `;
    }
  }}

  ${(props) => {
    if (!!props.mgB) {
      return css`
        margin-bottom: ${(props) => props.mgB};
      `;
    } else if (!!props.mgT) {
      return css`
        margin-top: ${(props) => props.mgT};
      `;
    } else {
      return css`
        margin: 0;
      `;
    }
  }}
`;

export const HeaderWrapper = styled(Container)`
  justify-content: space-between;
`;

export const PageWrapper = styled(Container)`
  width: 100%;
  justify-content: center;

  h1 {
    text-align: center;
  }
`;

export const RowWrapper = styled(Container)`
  width: 100%;
  display: block;

  & > div {
    margin-bottom: 0.5em;
  }

  @media (min-width: 710px) {
    display: flex;

    & > div {
      margin-bottom: 0;
    }
  }
`;

export const ColumnWrapper = styled(Container)`
  width: 100%;

  @media (min-width: 710px) {
    width: ${(props) => (!!props.wd ? props.wd : "100%")};
  }
`;

export const HamburgerIconWrapper = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.8em;
  height: 1.8em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.8em;
    height: 0.25em;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    ${(props) => {
      if (props.pageId === PAGES.blogsPage.id) {
        return css`
          background-color: ${({ open }) => (open ? "#000" : "#004149")};
        `;
      } else {
        return css`
          background-color: ${({ open }) => (open ? "#000" : "#fcf1e3")};
        `;
      }
    }}

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  :hover {
    div {
      background-color: #1e9fcc;
    }
  }
`;

export const NavSidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 300ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  height: 100vh;
  text-align: left;
  padding: 2em;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 576px) {
    width: 100%;
    align-items: center;
  }

  button {
    margin-bottom: calc(1.8em + 1.8vw);
    color: #000;
    background-color: transparent;
    border: none;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;
    transition: all 0.3s linear;

    h2 {
      transition: color 0.3s ease-in-out;
    }

    &:hover {
      h2 {
        color: #1e9fcc;
      }
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Logo = styled.img`
  width: 8em;
`;
