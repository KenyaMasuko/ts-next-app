import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProductForm } from ".";

export default {
  title: "Organisms/ProductForm",
  artType: {
    onProductSave: {
      description: "商品ボタンを押した時のイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof ProductForm>;

const Template: ComponentStory<typeof ProductForm> = (args) => (
  <ProductForm {...args} />
);

export const Form = Template.bind({});
