import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Search } from "../ui/Search";
import { Navigation } from "./Navigation";
import { Button } from "../ui/Button";

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

        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <p
            css={css`
              margin-right: 2rem;
            `}
          >
            Hey Franco!
          </p>

          <Button bgColor>Log out</Button>
          <Link href="/" passHref>
            <Button bgColor>Sign In</Button>
          </Link>
          <Link href="/" passHref>
            <Button>Sign Up</Button>
          </Link>
        </div>
      </Container>
    </HeaderContainer>
  );
};
