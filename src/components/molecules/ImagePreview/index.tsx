import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { CloseIcon } from "components/atoms/IconButton";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";

const ImagePreviewContainer = styled(Box)`
  position: relative;
  /* width: fit-content; */
`;

//閉じるボタン
const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 0 6px 0 6px;
  background-color: rgba(44, 44, 44, 0.66);
  cursor: pointer;
`;

type ImagePreviewProps = {
  /**
   * 画像URL
   */
  src?: string;
  /**
   * 代替テキスト
   */
  alt?: string;
  /**
   * 縦幅
   */
  height?: string;
  /**
   * 横幅
   */
  width?: string;
  /**
   * 削除ボタンを押した時のイベントハンドラ
   */
  onRemove?: (src: string) => void;
};

export const ImagePreview: FC<ImagePreviewProps> = ({
  src,
  alt,
  height,
  width,
  onRemove,
}) => {
  //閉じるボタンを押したらonRemoveを呼ぶ
  const handleCloseClick: ComponentProps<"div">["onClick"] = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove && src && onRemove(src);

    return false;
  };

  return (
    <ImagePreviewContainer width={width} height={height}>
      <img src={src} alt={alt} height={height} width={width} />
      <CloseBox
        alignItems="center"
        justifyContent="center"
        onClick={handleCloseClick}
      >
        <CloseIcon size={24} color="white" />
      </CloseBox>
    </ImagePreviewContainer>
  );
};
