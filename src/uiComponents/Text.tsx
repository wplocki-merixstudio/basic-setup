import styled from "styled-components";

export const Text = styled.span<{ color?: string }>`
  color: ${(p) => (p.color ? p.color : "var(--typography-primary)")};
  font-family: "Euclid Circular A", Arial;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
`;
