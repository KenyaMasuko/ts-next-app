import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RectLoader } from ".";

export default {
	title: "Atoms/RectLoader",
	argTypes: {
		width: {
			control: { type: "number" },
			defaultValue: 320,
			description: "横幅",
			table: {
				type: { summary: "number" },
			},
		},
		height: {
			control: { type: "number" },
			defaultValue: 320,
			description: "縦幅",
			table: {
				type: { summary: "number" },
			},
		},
	},
} as ComponentMeta<typeof RectLoader>;

const Template: ComponentStory<typeof RectLoader> = (args) => (
	<RectLoader {...args} />
);

export const Normal = Template.bind({});
