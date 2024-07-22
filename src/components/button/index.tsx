import { colors } from "@/src/theme/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type IconNames = keyof typeof MaterialIcons.glyphMap;

type ButtonProps = TouchableOpacityProps & {
  text: string;
  variant?: "delete" | "default" | "secondary";
  isLoading?: boolean;
  leftIcon?: IconNames;
  rightIcon?: IconNames;
};

export const Button: FC<ButtonProps> = ({
  text,
  variant = "default",
  leftIcon,
  isLoading,
  rightIcon,
  ...rest
}) => {
  let buttonColor;
  let buttonTextColor;

  switch (variant) {
    case "default":
      buttonColor = colors.red;
      buttonTextColor = colors.white;
      break;
    case "delete":
      buttonColor = colors.red;
      buttonTextColor = colors.white;
      break;
    case "secondary":
      buttonColor = colors.white;
      buttonTextColor = colors.red;
    default:
      break;
  }

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      disabled={isLoading}
      style={[styles.container, { backgroundColor: buttonColor }]}
    >
      {!isLoading ? (
        <>
          {leftIcon && (
            <MaterialIcons size={18} color={buttonTextColor} name={leftIcon} />
          )}
          <Text style={[styles.text, { color: buttonTextColor }]}>{text}</Text>
          {rightIcon && (
            <MaterialIcons size={18} color={buttonTextColor} name={rightIcon} />
          )}
        </>

      ) : (
        <ActivityIndicator color={colors.white} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100000,
    flexDirection: "row",
    gap: 16,
  },
  text: {
    fontSize: 16,
    textTransform: "capitalize",
  },
});
