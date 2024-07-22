import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";

type InputProps = TextInputProps & {
  isPassword?: boolean;
  label?: string;
  inputStyle?: StyleProp<TextStyle>;
};

export const Input: FC<InputProps> = ({ label, inputStyle, ...rest }) => {
  return (
    <View style={[styles.inputContainer, inputStyle]}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}

      <TextInput
        {...rest}
        placeholderTextColor={"gray"}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 46,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "#D4D4D4",
    borderWidth: 1,
    color: "#5B696D",
    fontSize: 14,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    color: "#5B696D",
    fontSize: 14,
  },
});
