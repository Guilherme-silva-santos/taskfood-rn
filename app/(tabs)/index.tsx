import {StyleSheet, ScrollView, View } from 'react-native';
import {Header} from '@/components/Header';
import { Banner } from '@/components/Banner';

export default function HomeScreen() {
  return (
    <ScrollView 
      style={{ flex: 1}}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ width: '100%', padding: 16 }}>
        <Header />

        <Banner />
      </View>
    </ScrollView>
  );
}
