import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { HorizontalCardFood } from "./foods";

export interface FoodProps{
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
}

export function TrendingFoods(){

    const [foods, setFoods] = useState<FoodProps[]>([]);
    useEffect(() => {
        // when the component is called, it is take the foods at the api
        async function getFoods(){
            // the react native when we run the local api we need to put 
            // the IPV4 address, instead of localhost
            const response = await fetch('http:/192.168.56.1:3000/foods')
            const data = await response.json();
            setFoods(data)
            console.log(data)
        }
        getFoods()
    }, [])

    return (
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={foods}
            renderItem={({item}) => <HorizontalCardFood food={item}/>}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{gap: 15, paddingHorizontal: 15}}
        />
    )
}