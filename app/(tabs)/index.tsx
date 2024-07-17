import { Banner } from '@/components/banner';
import { Search } from '@/components/search';
import { Header } from '@/components/header';

import {ScrollView, View } from 'react-native';
import { SectionTitleComponent } from '@/components/sectionTitleComponent';
import { TrendingFoods } from '@/components/trending';
import { Restaurants } from '@/components/restaurants';
import { RestaurantsList } from '@/components/restaurantsList';

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
      <SectionTitleComponent 
        name="Comidas em Alta" 
        size={18} 
        label="Veja mais" 
        action={() => {console.log('Veja mais');
        }} />
        <TrendingFoods />

      <SectionTitleComponent 
        name="Famosos no TaskFood" 
        size={18} 
        label="" 
        action={() => {console.log('Veja mais');
      }} />
      <Restaurants />
      <SectionTitleComponent 
        name="Restaurantes" 
        size={18} 
        label="Veja Todos" 
        action={() => {console.log('Veja mais');
      }} />
      <RestaurantsList />
    </ScrollView>
  );
}
