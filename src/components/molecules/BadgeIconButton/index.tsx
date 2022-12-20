import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Badge } from "components/atoms/Badge";

const BadgeIconButtonWrapper = styled.span<{ size: number | string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  display: flex;
  align-items: center;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: -7px;
  right: -10px;
`;

type BadgeIconButton = {
  icon: ReactNode;
  badgeContent?: number;
  badgeBackgroundColor: string;
  size?: number | string;
};

const BadgeIconButton: FC<BadgeIconButton> = ({
  icon,
  badgeContent,
  badgeBackgroundColor,
  size = "24px",
}) => {
  return (
    <BadgeIconButtonWrapper size={size}>
      {icon}
      {badgeContent && (
        <BadgeWrapper>
          <Badge
            content={`${badgeContent}`}
            backgroundColor={badgeBackgroundColor}
          />
        </BadgeWrapper>
      )}
    </BadgeIconButtonWrapper>
  );
};

export { BadgeIconButton };
