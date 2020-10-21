import React from "react";
import { PageWrapper } from "../components";
import { PAGES } from ".";

const BlogsPage = () => (
  <PageWrapper display="flex" as="main">
    <h1>{PAGES.blogsPage.name}</h1>
  </PageWrapper>
);

export default BlogsPage;
