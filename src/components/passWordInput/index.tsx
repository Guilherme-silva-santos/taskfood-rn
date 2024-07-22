import { colors } from "@/src/theme/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

type PasswordInputProps = TextInputProps & {
  label?: string;
};

export const PasswordInput: FC<PasswordInputProps> = ({ label, ...rest }) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          {...rest}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={colors.placeholder}
        />
        <TouchableOpacity
          style={styles.iconButton}
          onPress={(): void => setSecureTextEntry(!secureTextEntry)}
        >
          <MaterialIcons
            name={"visibility"}
            size={18}
            color={colors.gray[300]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    minHeight: 46,
    borderRadius: 8,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "90%",
    color: colors.gray[700],
    fontSize: 14,
  },
  iconButton: {
    width: "10%",
    padding: 8,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    color: colors.gray[700],
    fontSize: 14,
  },
});
