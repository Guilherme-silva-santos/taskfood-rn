import { Banner } from "@/src/components/banner";
import { Header } from "@/src/components/header";
import { Restaurants } from "@/src/components/restaurants";
import { RestaurantsList } from "@/src/components/restaurantsList";
import { Search } from "@/src/components/search";
import { SectionTitleComponent } from "@/src/components/sectionTitleComponent";
import { TrendingFoods } from "@/src/components/trending";
import { ScrollView, View } from "react-native";

export function Home() {
  return (
    <ScrollView 
      style={{ flex: 1 }}
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
        action={() => { console.log('Veja mais'); }}
      />
      <TrendingFoods />
      <SectionTitleComponent 
        name="Famosos no TaskFood" 
        size={18} 
        label="" 
        action={() => { console.log('Veja mais'); }}
      />
      <Restaurants />
      <SectionTitleComponent 
        name="Restaurantes" 
        size={18} 
        label="Veja Todos" 
        action={() => { console.log('Veja mais'); }}
      />
      <RestaurantsList />
    </ScrollView>
  );
}
