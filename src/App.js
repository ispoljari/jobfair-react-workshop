import React, { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { AboutPage, ReferencesPage, BlogsPage, PAGES } from "./pages";
import { Header, NavSidebar, Container } from "./components";

const App = () => {
  const [openPageId, setOpenPageId] = useState(PAGES.aboutPage.id);
  const [navSidebarOpen, setNavSidebarOpen] = useState(false);

  const handlePageSwitch = (id) => {
    setOpenPageId(id);
    setNavSidebarOpen(false);
  };

  const handleHamburgerIconClick = () => {
    setNavSidebarOpen(!navSidebarOpen);
  };

  return (
    <>
      <GlobalStyles pageId={openPageId} />
      <Container pd="2em">
        <Container mgB="1em">
          <Header
            onHamburgerIconClick={handleHamburgerIconClick}
            hamburgerOpen={navSidebarOpen}
            pageId={openPageId}
          />
        </Container>
        <Container display="flex">
          {openPageId === PAGES.aboutPage.id ? (
            <AboutPage />
          ) : openPageId === PAGES.referencesPage.id ? (
            <ReferencesPage />
          ) : (
            <BlogsPage />
          )}
        </Container>
      </Container>
      <NavSidebar
        sidebarOpen={navSidebarOpen}
        onPageNameClick={handlePageSwitch}
      />
    </>
  );
};

export default App;
