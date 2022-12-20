export type CartProductProps = {
  /**
   * 商品id
   */
  id: number;
  /**
   * 商品画像URL
   */
  imageUrl: string;
  /**
   * 商品タイトル
   */
  title: string;
  /**
   * 商品値段
   */
  price: number;
  /**
   * 購入ボンタンを押した時のイベントハンドラ
   */
  onBuyButtonClick?: (id: number) => void;
  /**
   * 削除ボタンを押した時のイベントハンドラ
   */
  onRemoveButtonClick?: (id: number) => void;
};
