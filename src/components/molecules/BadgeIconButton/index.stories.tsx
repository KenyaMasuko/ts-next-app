import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
	PersonIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "components/atoms/IconButton";
import { BadgeIconButton } from ".";

export default {
	title: "Molecules/BadgeIconButton",
	argTypes: {
		icon: {
			control: { type: "object" },
			description: "アイコン",
			table: {
				type: { summary: "object" },
			},
		},
		badgeContent: {
			control: { type: "number" },
			description: "バッジのカウンター",
			table: {
				type: { summary: "number" },
			},
		},
		badgeBackgroundColor: {
			control: { type: "color" },
			description: "バッジの背景色",
			table: {
				type: { summary: "string" },
			},
		},
	},
} as ComponentMeta<typeof BadgeIconButton>;

const Template: ComponentStory<typeof BadgeIconButton> = (args) => {
	return <BadgeIconButton {...args} />;
};

const SearchBadgeIcon = Template.bind({});
SearchBadgeIcon.args = {
	icon: <SearchIcon size={24} />,
	badgeContent: 1,
	badgeBackgroundColor: "#ed9f28",
};

const PersonBadgeIcon = Template.bind({});
PersonBadgeIcon.args = {
	icon: <PersonIcon size={24} />,
	badgeContent: 1,
	badgeBackgroundColor: "#d4001a",
};

const ShoppingCartBadgeIcon = Template.bind({});
ShoppingCartBadgeIcon.args = {
	icon: <ShoppingCartIcon size={24} />,
	badgeContent: 1,
	badgeBackgroundColor: "#32bf00",
};

export { SearchBadgeIcon, PersonBadgeIcon, ShoppingCartBadgeIcon };
