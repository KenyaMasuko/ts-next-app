import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProductCard } from ".";

export default {
	title: "Organisms/ProductCard",
	argTypes: {
		title: {
			control: { type: "text" },
			description: "商品タイトル",
			table: {
				type: { summary: "string" },
			},
		},
		price: {
			control: { type: "number" },
			description: "商品値段",
			table: {
				type: { summary: "number" },
			},
		},
		imageUrl: {
			control: { type: "text" },
			description: "商品画像URL",
			table: {
				type: { summary: "string" },
			},
		},
		blurDataUrl: {
			control: { type: "text" },
			description: "商品のぼかし画像のデータURIスキーム",
			table: {
				type: { summary: "string" },
			},
		},
		variant: {
			options: ["listing", "small", "detail"],
			control: { type: "radio" },
			description: "バリアント(表示スタイル)",
			defaultValue: "listing",
			table: {
				type: { summary: "listing | small | small" },
				defaultValue: { summary: "primary" },
			},
		},
	},
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
	<ProductCard {...args} />
);

// Listingカード
const Listing = Template.bind({});
Listing.args = {
	variant: "listing",
	title: "ナイスシューズ",
	imageUrl: "/images/sample/1.jpeg",
	price: 2000,
};

// Smallカード
const Small = Template.bind({});
Listing.args = {
	variant: "small",
	title: "ナイスシューズ",
	imageUrl: "/images/sample/1.jpeg",
	price: 2000,
};

// Detailカード
const Detail = Template.bind({});
Listing.args = {
	variant: "detail",
	title: "ナイスシューズ",
	imageUrl: "/images/sample/1.jpeg",
	price: 2000,
};

export { Listing, Small, Detail };
