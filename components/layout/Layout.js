import React, { Fragment } from "react";
import Link from "next/link";
import { Header } from "./Header";
import { Global, css } from "@emotion/react";

export const Layout = (props) => {
  return (
    <Fragment>
      <Global
        style={css`
          :root {
            --gray: #3d3d3d;
            --gray2: #6f6f6f;
            --orange: #da552f;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem; /*16px*/
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
              text-decoration: none;
          }
        `}
      />
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};
