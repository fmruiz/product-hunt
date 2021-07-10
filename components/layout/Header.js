import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";

import { Search } from "../ui/Search";
import { Navigation } from "./Navigation";

import Logo from "../../public/static/img/logo.png";

// styled components
const HeaderContainer = styled.header`
  border-bottom: 2px solid ${(props) => props.theme.gray3};
  padding: 1rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <div>
          <Link href="/" passHref>
            <Image src={Logo} alt="logo" width="50" height="50" />
          </Link>

          <Search />

          <Navigation />
        </div>

        <div>
          <p>Hey Franco!</p>

          <button type="button">Log out</button>
          <Link href="/">Sign In</Link>
          <Link href="/">Sign Up</Link>
        </div>
      </Container>
    </HeaderContainer>
  );
};
