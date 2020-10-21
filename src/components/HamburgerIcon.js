import React from "react";
import { HamburgerIconWrapper, Container } from ".";

const HamburgerIcon = ({ onHamburgerIconClick, hamburgerOpen, pageId }) => (
  <Container>
    <HamburgerIconWrapper
      open={hamburgerOpen}
      onClick={onHamburgerIconClick}
      pageId={pageId}
    >
      <div />
      <div />
      <div />
    </HamburgerIconWrapper>
  </Container>
);

export default HamburgerIcon;
