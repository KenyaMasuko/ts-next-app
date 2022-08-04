import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import { FC, useCallback, useMemo } from "react";
import styled from "styled-components";
import { Dropzone } from "../Dropzone";
import { ImagePreview } from "../ImagePreview";

const InputImageContainer = styled(Flex)`
	& > *:not(:first-child) {
		margin-top: 8px;
	}
`;

export type FileData = {
	id?: string;
	src?: string;
	file?: File;
	selected?: boolean;
	chosen?: boolean;
};

interface InputImagesProps {
	name?: string;
	images: FileData[];
	maximumNumber?: number;
	hasError?: boolean;
	width?: string;
	height?: string;
	onChange: (images: FileData[]) => void;
}

/**
 * インプットイメージ
 */
const InputImages: FC<InputImagesProps> = (props) => {
	const {
		images,
		maximumNumber,
		name,
		hasError,
		width = "100%",
		height = "260px",
		onChange,
	} = props;

	const files = useMemo(
		() => images.filter((img) => img.file).map((img) => img.file as File),
		[images]
	);

	const isDropzoneDisplay =
		!maximumNumber || images.length < maximumNumber ? "block" : "none";

	const onRemove = useCallback(
		(src: string) => {
			const image = images.find((img: FileData) => img.src === src);
			const newImages = images.filter((img: FileData) => img.src !== src);

			if (image) {
				if (image.file && image.src) {
					URL.revokeObjectURL(image.src);
					delete image.src;
				}

				onChange && onChange(newImages);
			}
		},
		[images, onChange]
	);

	const onDrop = (files: File[]) => {
		const newImages = [];

		for (const file of files) {
			const img = images.find((img: FileData) => img.file === file);

			if (
				!img &&
				(!maximumNumber || images.length + newImages.length < maximumNumber)
			) {
				newImages.push({ file, src: URL.createObjectURL(file) });
			}
		}
		onChange && onChange(newImages);
	};

	return (
		<InputImageContainer flexDirection="column">
			{images &&
				images.map((img, index) => (
					<ImagePreview
						alt={img.id}
						key={index}
						src={img.src}
						height={height}
						onRemove={onRemove}
					/>
				))}
			<Box style={{ display: isDropzoneDisplay }}>
				<Dropzone
					acceptedFileTypes={[
						"image/png",
						"image/jpeg",
						"image/jpg",
						"image/gif",
					]}
					name={name}
					width={width}
					height={height}
					value={files}
					hasError={hasError}
					onDrop={onDrop}
				/>
			</Box>
		</InputImageContainer>
	);
};

export { InputImages };
