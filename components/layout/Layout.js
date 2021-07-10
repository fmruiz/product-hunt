import React, { Fragment } from "react";
import Link from "next/link";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

export const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <main>{props.children}</main>
    </Fragment>
  );
};
