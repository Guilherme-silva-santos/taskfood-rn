import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "@/src/theme/theme";
import { ProfileHeader } from "@/src/components/profile-header";

type BaseContainerProps = {
  children: ReactNode;
  headerTitle: string;
};

export const BaseContainer: FC<BaseContainerProps> = ({
  children,
  headerTitle,
}) => {
  return (
    <>
      <ProfileHeader title={headerTitle} />
      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.red,
      alignItems: "stretch",
    },
    content: {
      flex: 1,
      backgroundColor: "#fafafa",
      borderTopLeftRadius: 36,
      borderTopRightRadius: 36,
    },
  });