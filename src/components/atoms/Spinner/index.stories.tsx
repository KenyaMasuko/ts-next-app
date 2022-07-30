import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spinner, SpinnerWrapper } from ".";

export default {
	title: "Atoms/Spinner",
	argTypes: {
		size: {
			control: { type: "number" },
			defaultValue: 50,
			description: "サイズ",
			table: {
				type: { summary: "number" },
			},
		},
		strokeWidth: {
			control: { type: "number" },
			defaultValue: 4,
			description: "先の太さ",
			table: {
				type: { summary: "number" },
			},
		},
		isAutoCentering: {
			control: { type: "boolean" },
			defaultValue: false,
			description: "センタリングフラグ",
			table: {
				type: { summary: "boolean" },
			},
		},
	},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
	<SpinnerWrapper>
		<Spinner {...args} />
	</SpinnerWrapper>
);

export const Normal = Template.bind({});
