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
      <Link href="/ranking">Ranking</Link>
      <Link href="/new-product">New Product</Link>
      <Link href="/about">About</Link>
    </Nav>
  );
};
