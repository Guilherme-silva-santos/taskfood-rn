import { Button } from '@/src/components/button';
import { Profile } from '@/src/templates/profile';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  const router = useRouter()
  return (
    <Profile />
  );
}

const styles = StyleSheet.create({
});
