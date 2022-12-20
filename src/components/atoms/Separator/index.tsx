import { ReactNode } from "react";
import styled from "styled-components";

//getMarginに渡す引数の型を定義
interface SeparatorProps {
  children?: ReactNode;
}

//marginのセット
const getMargin = ({ children }: SeparatorProps) =>
  children ? "0.50em" : "0em";

const Separator = styled.div<SeparatorProps>`
  height: 22px;
  color: #e5e7eb;
  display: flex;
  align-items: center;
  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e5e7eb;
  }

  &::before {
    margin-right: ${getMargin};
  }

  &::after {
    margin-left: ${getMargin};
  }
`;

export { Separator };
