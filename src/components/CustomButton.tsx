import { styled } from "nativewind";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

//const StyledView = styled(View)
const StyledText = styled(Text);
const StyledView = styled(View);

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
export const CustomButton: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor = "bg-green-500",
  label,
  ...props
}: ButtonProps) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <StyledView>
      <TouchableOpacity className={backgroundColor} onPress={onPress}>
        <StyledText>{label}</StyledText>
      </TouchableOpacity>
    </StyledView>
  );
};
