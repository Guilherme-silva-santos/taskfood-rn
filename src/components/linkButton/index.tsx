import { colors, fontFamily } from "@/src/theme/theme";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type LinkButtonProps = TouchableOpacityProps & {
  text: string;
};

export const LinkButton: FC<LinkButtonProps> = ({ text, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: fontFamily.barlow.semiBold,
    fontSize: 16,
    color: colors.pink,
  },
});
