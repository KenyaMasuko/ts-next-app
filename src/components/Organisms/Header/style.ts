import { Text } from "components/atoms/Text";
import Flex from "components/layout/Flex";
import styled from "styled-components";

const Nav = styled(Flex)`
	& > span:not(:first-child) {
		margin-left: ${({ theme }) => theme.space[2]};
	}
`;

const HeaderRoot = styled.header`
	height: 88px;
	padding: ${({ theme }) => theme.space[2]} 0px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const NavLink = styled.span`
	display: inline-block;
`;

const Anchor = styled(Text)`
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

export { Nav, NavLink, HeaderRoot, Anchor };
