import React from "react";
import { PageWrapper } from "../components";
import { PAGES } from ".";

const ReferencesPage = () => (
  <PageWrapper display="flex" as="main">
    <h1>{PAGES.referencesPage.name}</h1>
  </PageWrapper>
);

export default ReferencesPage;
