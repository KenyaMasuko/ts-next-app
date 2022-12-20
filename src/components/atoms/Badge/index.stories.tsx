import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge } from ".";

export default {
  title: "Atoms/Badge",
  argTypes: {
    content: {
      control: { type: "text" },
      description: "バッジのテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "バッジの色",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

const Orange = Template.bind({});
Orange.args = {
  content: "1",
  backgroundColor: "#ed9f28",
};

const Green = Template.bind({});
Green.args = {
  content: "2",
  backgroundColor: "#32bf00",
};

const Red = Template.bind({});
Red.args = {
  content: "3",
  backgroundColor: "#d4001a",
};

export { Orange, Green, Red };
