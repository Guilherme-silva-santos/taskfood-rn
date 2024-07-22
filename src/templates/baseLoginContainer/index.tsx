import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FC, ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BaseLoginContainerProps = {
  children: ReactNode;
  title: string;
  text: string;
  hasHeader?: boolean;
};

export const BaseLoginContainer: FC<BaseLoginContainerProps> = ({
  children,
  title,
  text,
  hasHeader = true,
}) => {
  const { canGoBack, back } = useRouter();

  return (
    <View style={styles.container}>
      {hasHeader && (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Olá.</Text>
          <Text style={styles.headerSubtitle}>{text}</Text>
        </View>
      )}
      <View
        style={[
          styles.contentContainer,
          { height: hasHeader ? "70%" : "100%" },
        ]}
      >
        <View style={styles.contentHeader}>
          {canGoBack() && (
            <TouchableOpacity onPress={back} style={styles.backButton}>
              <MaterialIcons name="arrow-back-ios" />
            </TouchableOpacity>
          )}
          <Text style={styles.contentTitle}>{title}</Text>
          {canGoBack() && <View style={styles.emptyContainer} />}
        </View>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f44e3f",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: 32,
  },
  emptyContainer: {
    flex: 1,
  },
  backButton: {
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    padding: 20,
    alignItems: "flex-start",
    gap: 8,
  },
  headerTitle: {
    fontSize: 28,
    color: "white",
    textAlign: "left",
  },
  headerSubtitle: {
    fontSize: 24,
    color: 'white',
    textAlign: "left",
  },
  contentHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentContainer: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
  contentTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "gray",
    flex: 8,
  },
});
