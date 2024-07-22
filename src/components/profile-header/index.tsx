
import { colors } from "@/src/theme/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


type HeaderProps = {
  title: string;
};

export const ProfileHeader: FC<HeaderProps> = ({ title }: HeaderProps) => {
  const pathname = usePathname()
  const { canGoBack, back } = useRouter();

  return (

    <View style={styles.header}>
      {canGoBack() ? (
        <TouchableOpacity style={styles.iconContainer} onPress={back}>
          <MaterialIcons name="arrow-back-ios" size={24} color={colors.white} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.emptyContainer}>
        {pathname === '/posts' && (
          <TouchableOpacity
          >
            <MaterialIcons
              name="exit-to-app"
              size={24}
              color={colors.white}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.red,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent:'space-between',
    position: 'relative'
  },
  title: {
    color: colors.white,
  },

  iconContainer: {
    paddingLeft: 8,
  },
  emptyContainer: {
    width: 24,
    height: 24
  },
  dropdown: {
    borderRadius: 33,
    width: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end' ,
    position: 'absolute',
    right: 14
  },
});
