import React from "react";
import { Layout } from "../components/layout/Layout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h1>Home</h1>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
