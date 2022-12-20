import { ComponentMeta } from "@storybook/react";
import { Separator } from ".";

export default {
  title: "Atoms/Separator",
} as ComponentMeta<typeof Separator>;

const Standard = () => {
  <>
    <Separator>or</Separator>
    <Separator>and</Separator>
    <Separator />
  </>;
};

export { Standard };
