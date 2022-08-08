export type ProductCardProps = {
	/**
	 * 商品タイトル
	 */
	title: string;
	/**
	 * 商品値段
	 */
	price: number;
	/**
	 * 商品画像URL
	 */
	imageUrl: string;
	/**
	 * 商品のカードぼかしのデータURIスキーム
	 */
	blurDataUrl: string;
	/**
	 *　バリアント（表示スタイル）
	 */
	variant: "listing" | "small" | "detail";
};
