import React from "react";
import { HeaaderItem } from "./HeaaderItem";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <h1>LOGO</h1>

          <nav>
            <ul>
              <HeaaderItem link="/" text="Get" />
              <HeaaderItem link="/create" text="Create" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
