import { Button } from '@/src/components/button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  const router = useRouter()
  return (
    <View>
      <Text>Perfil</Text>
      <Button
        text="Sair"
        variant="secondary"
        onPress={() => router} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
});
