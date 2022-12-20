import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dropdown } from ".";

export default {
  title: "Molecules/Dropdown",
  argTypes: {
    options: {
      control: { type: "array" },
      description: "ドロップダウンの選択肢",
      table: {
        type: { summary: "array" },
      },
    },
    value: {
      control: { type: "text" },
      description: "ドロップダウンの値",
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "プレースホルダー",
      table: {
        type: { summary: "string" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      description: "バリデーションエラーフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    onChange: {
      description: "",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const Normal = Template.bind({});
Normal.args = {
  options: [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
  ],
};

const InitialValue = Template.bind({});
InitialValue.args = {
  options: [
    { value: null, label: "-" },
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
  ],
  placeholder: "Please select items from the list",
  value: "one",
};

const Many = Template.bind({});
Many.args = {
  options: Array.from(Array(20), (_v, k) => {
    return { value: k.toString(), label: k.toString() };
  }),
  placeholder: "Please select items from the list",
};

export { Normal, InitialValue, Many };
