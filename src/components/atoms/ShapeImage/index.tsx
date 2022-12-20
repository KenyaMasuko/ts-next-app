import Image, { ImageProps } from "next/image";
import styled from "styled-components";

//shapeImageのバリアント型
type ImageShape = "circle" | "square";

//shapeImageに渡すpropsの型
type ShapeImageProps = ImageProps & { shape?: ImageShape };

// circleなら円形に
const ImageWidthShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : "0")};
`;

//shapeImageのコンポーネント
const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props;
  return <ImageWidthShape shape={shape} {...imageProps} />;
};

export { type ImageShape, type ShapeImageProps, ShapeImage };
