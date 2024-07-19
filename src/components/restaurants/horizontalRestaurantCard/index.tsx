import { Image, Pressable, Text, View } from "react-native";
import { RestaurantProps } from "..";

export function RestaurantItem({restaurant}: {restaurant: RestaurantProps}) {
    return(
        <Pressable style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image
                source={{ uri: restaurant.image }}
                style={{ width: 80, height: 80, borderRadius: 999 }}
            />
            <Text 
                style={{ textAlign: 'center', width:80, fontSize: 12, lineHeight: 16, marginTop: 4 }}
                numberOfLines={2}
                >
                {restaurant.name}
            </Text>
        </Pressable>
    )
}