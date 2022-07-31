import styled, { css } from "styled-components";

//styled-componentの型は引数の型をジェネリクスで定義する
//inputのコンポーネント
const Input = styled.input<{ hasBorder?: boolean; hasError?: boolean }>`
	color: ${({ theme }) => theme.colors.text};
	${({ theme, hasBorder, hasError }) => {
		if (hasBorder) {
			return css`
				border: 1px solid
					${hasError ? theme.colors.danger : theme.colors.border};
				border-radius: 5px;
			`;
		} else {
			return css`
				border: none;
			`;
		}
	}}
	padding: 11px 12px 12px 9px;
	box-sizing: border-box;
	outline: none;
	width: 100%;
	height: 38px;
	font-size: 16px;
	line-height: 19px;
	&::placeholder {
		color: ${({ theme }) => theme.colors.placeholder};
	}
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	&[type="number"] {
		-moz-appearance: textfield;
	}
`;

Input.defaultProps = {
	hasBorder: true,
};

export { Input };
