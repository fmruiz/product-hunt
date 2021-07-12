import React from "react";
import styled from "@emotion/styled";

const InputText = styled.input`
  border: 1px solid ${(props) => props.theme.colors.gray3};
  padding: 0.8rem;
  min-width: 300px;
  border-radius: ${(props) => props.theme.borderRadius.border1};
  margin-left: 2rem;
`;

// const InputSubmit = styled.button`
//   height: 3rem;
//   width: 3rem;
//   background-size: 4rem;
// `;

export const Search = () => {
  return (
    <form>
      <InputText type="text" placeholder="Search Product Hunt" />
      {/* <InputSubmit type="submit">Search</InputSubmit> */}
    </form>
  );
};
