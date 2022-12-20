import styled from "styled-components";

//バッジの周りのスタイリング
const BadgeWrapper = styled.div<{ backgroundColor: string }>`
  border-radius: 20px;
  height: 20px;
  min-width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

//バッジの中のテキストのスタイル
const BadgeText = styled.p`
  color: white;
  font-size: 11px;
  user-select: none;
`;

//バッジのpropsの型
interface BadgeProps {
  content: string;
  backgroundColor: string;
}

//バッジコンポーネント
const Badge = ({ content, backgroundColor }: BadgeProps) => {
  return (
    <BadgeWrapper backgroundColor={backgroundColor}>
      <BadgeText>{content}</BadgeText>
    </BadgeWrapper>
  );
};

export { Badge };
