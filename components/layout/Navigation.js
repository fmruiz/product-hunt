import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.2rem;
    margin-left: 2rem;
    color: ${(props) => props.theme.colors.gray2};
    font-family: "PT Sans", sans-serif;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <Link href="/">Home</Link>
      <Link href="/">Ranking</Link>
      <Link href="/">New Product</Link>
      <Link href="/">About</Link>
    </Nav>
  );
};
