import React from "react";
import { Args, ComponentMeta } from "@storybook/react";
import { CustomButton } from "./CustomButton";
export default {
  title: "Example/CustomButton",
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template = (args: Args, label: string, backgroundColor: string) => (
  <CustomButton label={label} backgroundColor={backgroundColor} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  primary: false,
  size: "medium",
  backgroundColor: "bg-red-500",
  label: "Button",
};
