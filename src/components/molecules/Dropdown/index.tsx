import { Text } from "components/atoms/Text";
import Flex from "components/layout/Flex";
import {
	FormEvent,
	SyntheticEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import styled from "styled-components";

const DropdownRoot = styled.div`
	position: relative;
	height: 38px;
`;

//ドロップダウンの外観
const DropdownControl = styled.div<{ hasError?: boolean }>`
	position: relative;
	overflow: hidden;
	background-color: #fff;
	border: ${({ theme, hasError }) =>
		hasError
			? `1px solid ${theme.colors.danger}`
			: `1px solid ${theme.colors.border}`};
	border-radius: 5px;
	box-sizing: border-box;
	cursor: default;
	outline: none;
	padding: 8px 52px 8px 12px;
`;

//ドロップダウンのテキスト
const DropdownValue = styled.div`
	color: ${({ theme }) => theme.colors.text};
`;

//ドロップダウンのプレースホルダー
const DropdownPlaceholder = styled.div`
	color: #757575;
	font-size: ${({ theme }) => theme.fontSizes[1]};
	min-height: 20px;
	line-height: 20px;
`;

//ドロップダウンの矢印の外観
const DropdownArrow = styled.div<{ isOpen: boolean }>`
	border-color: ${({ isOpen }) =>
		isOpen ? "transparent transparent #222" : "#222 transparent transparent"};
	border-width: ${({ isOpen }) => (isOpen ? "0 5px 5px" : "5px 5px 0")};
	border-style: solid;
	content: " ";
	display: block;
	height: 0;
	margin-top: -ceil(2.5);
	position: absolute;
	right: 10px;
	top: 16px;
	width: 0;
`;

//ドロップダウンmenu
const DropdownMenu = styled.div`
	background-color: #fff;
	border: ${({ theme }) => theme.colors.border};
	box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
		0px 8px 10px 1px rgb(0 0 0 / 10%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
	box-sizing: border-box;
	border-radius: 5px;
	margin-top: -1px;
	max-height: 200px;
	overflow-y: auto;
	position: absolute;
	top: 100%;
	width: 100%;
	z-index: 1000;
`;

//ドロップダウンオプション
const DropdownOption = styled.div`
	padding: 8px 12px 8px 12px;
	&:hover {
		background-color: #f9f9f9;
	}
`;

interface DropdownItemProps {
	item: DropdownItem;
}

const DropdownItem = (props: DropdownItemProps) => {
	const { item } = props;

	return (
		<Flex alignItems="center">
			<Text margin={0} variant="small">
				{item.label ?? item.value}
			</Text>
		</Flex>
	);
};

export interface DropdownItem {
	value: string | number | null;
	label?: string;
}

interface DropdownProps {
	/**
	 * ドロップダウンの選択肢
	 */
	options: DropdownItem[];
	/**
	 * ドロップダウンの値
	 */
	value?: string | number;
	/**
	 * <input /> のname属性
	 */
	name?: string;
	/**
	 * プレースホルダー
	 */
	placeholder?: string;
	/**
	 * バリデーションフラグ
	 */
	hasError?: boolean;
	/**
	 * 値が変化した時のイベントハンドラ
	 */
	onChange?: (selected?: DropdownItem) => void;
}

/**
 * ドロップダウンメニュー
 */
const Dropdown = (props: DropdownProps) => {
	const { options, value, name, placeholder, hasError, onChange } = props;
	const initialItem = options.find((i) => i.value === value);
	//isOpenの状態を監視
	const [isOpen, setIsOpenValue] = useState(false);
	//選ばれているitemの状態を管理
	const [selectedItem, setSelectedItem] = useState(initialItem);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleDoubleClick = useCallback(
		(e: MouseEvent | TouchEvent) => {
			//自分自身をクリックした場合は何もしない
			if (dropdownRef.current) {
				const elems = dropdownRef.current.querySelectorAll("*");

				for (let i = 0; i < elems.length; i++) {
					if (elems[i] == e.target) {
						return;
					}
				}
			}
			setIsOpenValue(false);
		},
		[dropdownRef]
	);

	//アイテムを選んだ時にisOpenフラグを逆にする
	const handleMouseDown = (e: SyntheticEvent) => {
		setIsOpenValue((isOpen) => !isOpen);
		e.stopPropagation();
	};

	//アイテムを選んだ時の状態を処理
	const handleSelectValue = (
		e: FormEvent<HTMLDivElement>,
		item: DropdownItem
	) => {
		e.stopPropagation();

		setSelectedItem(item);
		setIsOpenValue(false);
		onChange && onChange(item);
	};

	useEffect(() => {
		document.addEventListener("click", handleDoubleClick, false);
		document.addEventListener("touchend", handleDoubleClick, false);

		return function cleanup() {
			document.addEventListener("click", handleDoubleClick, false);
			document.addEventListener("touchend", handleDoubleClick, false);
		};
		// 最初だけ呼び出す
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<DropdownRoot ref={dropdownRef}>
			<DropdownControl
				hasError={hasError}
				onMouseDown={handleMouseDown}
				onTouchEnd={handleMouseDown}
				data-testid="dropdown-control"
			>
				{selectedItem && (
					<DropdownValue>
						<DropdownItem item={selectedItem} />
					</DropdownValue>
				)}
				{/* 何も選択されてない時はプレースホルダーを表示 */}
				{!selectedItem && (
					<DropdownPlaceholder>{props?.placeholder}</DropdownPlaceholder>
				)}
				{/* ダミーinput */}
				<input
					type="hidden"
					name={name}
					value={selectedItem?.value ?? ""}
					onChange={() => onChange && onChange(selectedItem)}
				/>
				<DropdownArrow isOpen={isOpen} />
			</DropdownControl>
			{/* ドロップダウンを表示 */}
			{isOpen && (
				<DropdownMenu>
					{props.options.map((item, idx) => (
						<DropdownOption
							key={idx}
							onMouseDown={(e) => handleSelectValue(e, item)}
							onClick={(e) => handleSelectValue(e, item)}
							data-testid="dropdown-option"
						>
							<DropdownItem item={item} />
						</DropdownOption>
					))}
				</DropdownMenu>
			)}
		</DropdownRoot>
	);
};

export { Dropdown };
