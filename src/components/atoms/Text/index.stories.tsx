import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from ".";

export default {
	title: "Atoms/Text",
	argTypes: {
		variant: {
			options: [
				"extraSmall",
				"small",
				"medium",
				"mediumLarge",
				"large",
				"extraLarge",
			],
			control: { type: "select" },
			defaultValue: "medium",
			description: "テキストバリアント",
			table: {
				type: {
					summary: "extraSmall, small, medium, mediumLarge, large, extraLarge",
				},
				defaultValue: { summary: "medium" },
			},
		},
		children: {
			control: { type: "text" },
			description: "テキスト",
			table: {
				type: { summary: "string" },
			},
		},
		fontWeight: {
			control: { type: "text" },
			description: "フォントの太さ",
			table: {
				type: { summary: "string" },
			},
		},
		lineHeight: {
			control: { type: "text" },
			description: "行の高さ",
			table: {
				type: { summary: "string" },
			},
		},
		color: {
			control: { type: "color" },
			description: "テキストの色",
			table: {
				type: { summary: "string" },
			},
		},
		backgroundColor: {
			control: { type: "color" },
			description: "背景色",
			table: {
				type: { summary: "string" },
			},
		},
		margin: {
			control: { type: "number" },
			description: "マージン",
			table: {
				type: { summary: "number" },
			},
		},
		marginTop: {
			control: { type: "number" },
			description: "マージントップ",
			table: {
				type: { summary: "number" },
			},
		},
		marginRight: {
			control: { type: "number" },
			description: "マージンライト",
			table: {
				type: { summary: "number" },
			},
		},
		marginBottom: {
			control: { type: "number" },
			description: "マージンボトム",
			table: {
				type: { summary: "number" },
			},
		},
		marginLeft: {
			control: { type: "number" },
			description: "マージンレフト",
			table: {
				type: { summary: "number" },
			},
		},
		padding: {
			control: { type: "number" },
			description: "パディング",
			table: {
				type: { summary: "number" },
			},
		},
		paddingTop: {
			control: { type: "number" },
			description: "パディングトップ",
			table: {
				type: { summary: "number" },
			},
		},
		paddingRight: {
			control: { type: "number" },
			description: "パディングライト",
			table: {
				type: { summary: "number" },
			},
		},
		paddingBottom: {
			control: { type: "number" },
			description: "パディングボトム",
			table: {
				type: { summary: "number" },
			},
		},
		paddingLeft: {
			control: { type: "number" },
			description: "パディングレフト",
			table: {
				type: { summary: "number" },
			},
		},
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

//サンプルテキスト
const longText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sed repellendus explicabo aperiam in aspernatur illum! Laborum, magnam quis molestias inventore dolore voluptatibus praesentium architecto, corporis laudantium eaque odit voluptas dolores. Et quidem sint ipsa dicta! Voluptatibus, quaerat quae. Perspiciatis at, pariatur corrupti numquam quo nemo minima mollitia nobis. Quae.`;

//extraSmall
export const ExtraSmall = Template.bind({});
ExtraSmall.args = { variant: "extraSmall", children: longText };

//small
export const Small = Template.bind({});
Small.args = { variant: "small", children: longText };

//medium
export const Medium = Template.bind({});
Medium.args = { variant: "medium", children: longText };

//mediumLarge
export const MediumLarge = Template.bind({});
MediumLarge.args = { variant: "mediumLarge", children: longText };

//Large
export const Large = Template.bind({});
Large.args = { variant: "large", children: longText };

//extraLarge
export const ExtraLarge = Template.bind({});
ExtraLarge.args = { variant: "extraLarge", children: longText };
