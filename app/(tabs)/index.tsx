import { Banner } from '@/components/banner';
import { Search } from '@/components/search';
import { Header } from '@/components/header';

import {ScrollView, View } from 'react-native';
import { SectionTitleComponent } from '@/components/sectionTitleComponent';

export default function HomeScreen() {
  return (
    <ScrollView 
      style={{ flex: 1}}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ width: '100%', padding: 16 }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <SectionTitleComponent name="Comidas em Alta" size={18} label="Veja mais" action={() => {console.log('Veja mais');
      }} />
    </ScrollView>
  );
}
