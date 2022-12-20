import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CartProduct } from ".";

export default {
  title: "Organisms/CartProduct",
  argTypes: {
    id: {
      control: { type: "number" },
      description: "商品id",
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
    title: {
      control: { type: "text" },
      description: "商品名",
      table: {
        type: { summary: "string" },
      },
    },
    price: {
      control: { type: "number" },
      description: "商品の価格",
      table: {
        type: { summary: "number" },
      },
    },
    onBuyButtonClick: {
      description: "購入ボタンを押した時のイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
    onRemoveButtonClick: {
      description: "削除ボタンを押した時のイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof CartProduct>;

const Template: ComponentStory<typeof CartProduct> = (args) => {
  return <CartProduct {...args} />;
};

const NiceShoes = Template.bind({});
NiceShoes.args = {
  id: 1,
  imageUrl: "/images/sample/1.jpeg",
  title: "ナイスシューズ",
  price: 3200,
};

export { NiceShoes };
