import Button from "components/atoms/Button";
import { Text } from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CartProductProps } from "./CartProduct";
import { RemoveText } from "./style";

const CartProduct: FC<CartProductProps> = ({
	id,
	imageUrl,
	title,
	price,
	onBuyButtonClick,
	onRemoveButtonClick,
}) => {
	return (
		<Flex justifyContent="space-between">
			<Flex>
				{/* 画像リンク */}
				<Box width="120px" height="120px">
					<Link href={`/products/${id}`} passHref>
						<a>
							<Image
								quality="85"
								src={imageUrl}
								alt={title}
								height={120}
								width={120}
								objectFit="cover"
							/>
						</a>
					</Link>
				</Box>
				{/* 商品名やボタン */}
				<Box padding={1}>
					<Flex
						height="100%"
						flexDirection="column"
						justifyContent="space-between"
					>
						{/* 商品名と値段 */}
						<Box>
							{/* 商品名 */}
							<Text
								fontWeight="bold"
								variant="mediumLarge"
								marginTop={0}
								marginBottom={1}
								as="p"
							>
								{title}
							</Text>
							{/* 値段 */}
							<Text marginTop={0} as="p">
								{price}円
							</Text>
						</Box>
						{/* ボタンをflexで横並びにする */}
						<Flex marginTop={{ base: 2, md: 0 }}>
							{/* 購入ボタン */}
							<Button
								width={{ base: "100px", md: "200px" }}
								onClick={() => onBuyButtonClick && onBuyButtonClick(id)}
							>
								購入
							</Button>
							{/* 削除ボタン モバイル */}
							<Button
								marginLeft={1}
								width={{ base: "100px", md: "200px" }}
								display={{ base: "block", md: "none" }}
								variant="danger"
								onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
							>
								削除
							</Button>
						</Flex>
					</Flex>
				</Box>
			</Flex>
			<Box display={{ base: "none", md: "block" }}>
				<RemoveText
					color="danger"
					onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
				>
					カートから削除
				</RemoveText>
			</Box>
		</Flex>
	);
};

export { CartProduct };
