import styled from "styled-components";

//商品カードのコンテナ
const ProductCardContainer = styled.div`
  position: relative;
`;

//商品カード画像のコンテナ
const ProductCardImageContainer = styled.div`
  z-index: 99;
`;

//商品カードの情報
const ProductCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`;

export { ProductCardContainer, ProductCardImageContainer, ProductCardInfo };
