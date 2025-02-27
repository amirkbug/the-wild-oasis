import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(probs) =>
    probs.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(probs) =>
    probs.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
