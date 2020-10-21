import React from "react";
import { HeaderWrapper, HamburgerIcon, Logo } from ".";

const Header = ({ hamburgerOpen, onHamburgerIconClick, pageId }) => (
  <HeaderWrapper as="header" display="flex">
    <HamburgerIcon
      hamburgerOpen={hamburgerOpen}
      onHamburgerIconClick={onHamburgerIconClick}
      pageId={pageId}
    />
    <Logo src="https://comsysto-react-workshop.s3.eu-central-1.amazonaws.com/Comsysto+Reply+-+LOGO+RGB.png" />
  </HeaderWrapper>
);

export default Header;
