import React from "react";
import Link from "next/link";
import { Search } from "../ui/Search";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>

          <Search />

          <Navigation />
        </div>

        <div>
          <p>Hey Franco!</p>

          <button type="button">Log out</button>
          <Link href="/">Sign In</Link>
          <Link href="/">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};
