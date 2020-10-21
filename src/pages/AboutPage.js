import React from "react";
import {
  PageWrapper,
  Container,
  RowWrapper,
  ColumnWrapper
} from "../components";
import { PAGES } from ".";
import { ABOUT } from "../data";

const createMarkup = (__html) => ({
  __html
});

const AboutPage = () => (
  <PageWrapper as="main">
    <h1>{PAGES.aboutPage.name}</h1>
    <Container mgT="3em">
      {ABOUT.map((rowPartial) => (
        <RowWrapper mgB="1em" alignItems="flex-start" key={rowPartial.category}>
          <ColumnWrapper wd="20%">
            <span dangerouslySetInnerHTML={createMarkup(rowPartial.category)} />
          </ColumnWrapper>
          <ColumnWrapper wd="80%">
            <span dangerouslySetInnerHTML={createMarkup(rowPartial.text)} />
          </ColumnWrapper>
        </RowWrapper>
      ))}
    </Container>
  </PageWrapper>
);

export default AboutPage;
