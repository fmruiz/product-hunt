import styled from "@emotion/styled";

export const Button = styled.a`
  font-weight: 700;
  text-transform: uppercase;
  border-radius: ${(props) => props.theme.borderRadius.border1};
  padding: 0.8rem 2rem;
  margin-right: 1rem;
  background-color: ${(props) => (props.bgColor ? "#da552f" : "white")};
  color: ${(props) => (props.bgColor ? "white" : "#000000")};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;
