import { Box } from "@mui/system";
import Button from "components/atoms/Button";
import { Text } from "components/atoms/Text";
import Flex from "components/layout/Flex";
import Image from "next/image";
import Link from "next/link";

const CartProduct = () => {
	return (
		<Flex>
			<Flex>
				{/* 画像リンク */}
				<Box>
					<Link href="">
						<a>{/* <Image /> */}</a>
					</Link>
				</Box>
				{/* 商品名やボタン */}
				<Flex>
					{/* 商品名と値段 */}
					<Box>
						{/* 商品名 */}
						<Text></Text>
						{/* 値段 */}
						<Text></Text>
					</Box>
					{/* ボタンをflexで横並びにする */}
					<Flex>
						{/* 購入ボタン */}
						<Button></Button>
						{/* 削除ボタン */}
						<Button></Button>
					</Flex>
				</Flex>
				<Box></Box>
			</Flex>
			<Box></Box>
		</Flex>
	);
};

export { CartProduct };
