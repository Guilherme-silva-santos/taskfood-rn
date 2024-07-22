import { ScrollView, Text, View } from "react-native";

export function Profile() {
    return (
        <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: '100%', padding: 16 }}>
            <Text>Profile</Text>
        </View>
        <Text>Profile</Text>
      </ScrollView>
    );
}