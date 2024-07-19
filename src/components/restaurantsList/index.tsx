import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { RestaurantItem } from "../restaurants/horizontalRestaurantCard";

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}

export function RestaurantsList() {

    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants(){
            const response = await fetch('http://192.168.56.1:3000/restaurants')
            const data = await response.json();
            setRestaurants(data)
            console.log(data)
        }
        getRestaurants()
    }, [])

    return (
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            renderItem={({item}) => <RestaurantItem restaurant={item}/>}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{gap: 15, paddingHorizontal: 15}}
        />
    );
}