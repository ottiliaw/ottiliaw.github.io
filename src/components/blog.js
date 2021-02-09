/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex } from "@theme-ui/components";
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ posts }) => {

  const tags = usePostTags();

  return (
    <Layout>
      <SEO title="Blog" />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`
        }}
      >
        <Styled.h2>Blog</Styled.h2>
      </Flex>

    </Layout>
  );
};
