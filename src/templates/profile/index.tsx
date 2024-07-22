import { ScrollView, Text, View } from "react-native";
import { BaseContainer } from "../baseContainer";

export function Profile() {
    return (
        <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <BaseContainer headerTitle="Perfil">
          <Text>Profile</Text>
        </BaseContainer>
      </ScrollView>
    );
}