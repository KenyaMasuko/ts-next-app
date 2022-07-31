import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CheckBox } from ".";

export default {
	title: "Molecules/CheckBox",
	argTypes: {
		label: {
			control: { type: "text" },
			description: "表示ラベルのテキスト",
			table: {
				type: { summary: "string" },
			},
		},
		isChecked: {
			control: { type: "boolean" },
			description: "チェックボックスのON/OFF",
			table: {
				type: { summary: "boolean" },
			},
		},
		onChange: {
			description: "値が変化した時のイベントハンドラ",
			table: {
				type: { summary: "function" },
			},
		},
	},
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
	<CheckBox {...args} />
);

const WidthLabel = Template.bind({});
WidthLabel.args = { label: "Label" };

export { WidthLabel };
