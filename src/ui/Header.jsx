import styled from "styled-components";

import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-grey-100);
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
