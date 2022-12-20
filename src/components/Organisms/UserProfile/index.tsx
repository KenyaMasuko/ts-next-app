import { ShapeImage } from "components/atoms/ShapeImage";
import { Text } from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import { FC } from "react";

type Props = {
	variant: "normal" | "small";
	username: string;
	profileImageUrl: string;
	numberOfProducts: number;
	description: string;
};

export const UserProfile: FC<Props> = ({
	variant = "normal",
	username,
	profileImageUrl,
	numberOfProducts,
	description,
}) => {
	const profileImageSize = variant === "small" ? "100px" : "120px";
	return (
		<Flex>
			<Box minWidth={profileImageSize}>
				<ShapeImage
					shape="circle"
					quality="85"
					src={profileImageUrl}
					alt={username}
					height={profileImageSize}
					width={profileImageSize}
				/>
			</Box>
			<Box padding={1}>
				<Flex
					height="100%"
					flexDirection="column"
					justifyContent="space-between">
					<Box>
						<Text
							as="p"
							fontWeight="bold"
							variant="mediumLarge"
							marginTop={0}
							marginBottom={1}>
							{username}
						</Text>
						<Text marginBottom={1} marginTop={0} as="p">
							{numberOfProducts}を追加
						</Text>
						{variant === "normal" && (
							<Text marginTop={0} as="p">
								{description}
							</Text>
						)}
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};
