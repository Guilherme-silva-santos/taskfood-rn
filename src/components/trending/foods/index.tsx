import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FoodProps } from "..";
import { Ionicons } from "@expo/vector-icons";

// the component has a property called food and this property receives
// a another property called food the type of FoodProps
export function HorizontalCardFood({food}:{food: FoodProps}){
    return(
        <Pressable style={style.container}>
            <Image 
                source={{ uri: food.image }}
                style={style.image} 
            />
            <View style={style.rating}>
                <Ionicons name="star" size={14} color="yellow" />
                <Text style={style.ratingText}>{food.rating}</Text>
            </View>
            <Text style={{ color: '#15803d', fontSize: 16, fontWeight: 'bold' }}>R$ {food.price}</Text>
            <Text style={{ marginTop: 4, color: 'black' }}>{food.name}</Text>
            <Text style={{ color: 'gray'}}>{food.time} - R$ {food.delivery}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 15,
        position: 'relative',
    },
    image:{
        width: 176,
        height: 144,
        borderRadius: 15,
    },
    ratingText:{
        color: 'white',
        fontSize: 14,
    },
    rating:{
        flexDirection: 'row',
        backgroundColor: '#171717E6',
        gap: 4,
        borderRadius: 999,
        position: 'absolute',
        marginTop: 6,
        marginLeft: 110,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
    }
})