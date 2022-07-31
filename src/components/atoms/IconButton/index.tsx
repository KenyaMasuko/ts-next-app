import {
	Search,
	PersonOutline,
	ShoppingCart,
	CheckBoxOutlineBlank,
	CheckBox,
	Cancel,
	CloudUpload,
	Close,
	GitHub,
	Person,
} from "@mui/icons-material";
import SvgIcon from "@mui/material/SvgIcon";
import { ComponentType, MouseEventHandler } from "react";
import styled from "styled-components";
import { theme } from "themes";

// list out color types
export type ThemeColors = keyof typeof theme.colors;

interface IconWrapperProps {
	size: number;
	cursor?: string;
	color?: ThemeColors;
	backgroundColor?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
	display: inline-block;
	font-size: ${({ size }) => size}px;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	background-color: ${({ backgroundColor }) => backgroundColor};
	cursor: ${({ cursor }) => cursor ?? "pointer"};
	color: ${({ theme, color }) => {
		if (color) {
			return theme.colors[color];
		}
		return theme.colors.icon;
	}};
	svg {
		display: block;
	}
`;

export interface IconButtonProps {
	onClick?: MouseEventHandler<SVGSVGElement>;
	color?: ThemeColors;
	className?: string;
	backgroundColor?: string;
	size?: number;
}

/**
 * icon button
 */
function withIconStyle(Icon: typeof SvgIcon): ComponentType<IconButtonProps> {
	const IconWithStyle = (props: IconButtonProps) => {
		const { onClick, className, size = 24, ...rest } = props;
		const cursor = onClick ? "pointer" : "";

		return (
			<IconWrapper cursor={cursor} size={size} {...rest}>
				<Icon
					className={className}
					fontSize="inherit"
					color="inherit"
					onClick={onClick}
				/>
			</IconWrapper>
		);
	};

	return IconWithStyle;
}

const CloseIcon = withIconStyle(Close);
const SearchIcon = withIconStyle(Search);
const CloudUploadIcon = withIconStyle(CloudUpload);
const CancelIcon = withIconStyle(Cancel);
const CheckBoxOutlineBlankIcon = withIconStyle(CheckBoxOutlineBlank);
const CheckBoxIcon = withIconStyle(CheckBox);
const PersonIcon = withIconStyle(Person);
const GitHubIcon = withIconStyle(GitHub);
const PersonOutlineIcon = withIconStyle(PersonOutline);
const ShoppingCartIcon = withIconStyle(ShoppingCart);

export {
	CloseIcon,
	SearchIcon,
	CloudUploadIcon,
	CancelIcon,
	CheckBoxOutlineBlankIcon,
	CheckBoxIcon,
	PersonIcon,
	GitHubIcon,
	PersonOutlineIcon,
	ShoppingCartIcon,
};
