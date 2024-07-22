import { Feather } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export function Search(){
    return (
        <View style={styles.container}>
           <Feather name="search" size={24} color="#64748b" />
           <TextInput 
           style={styles.input}
            placeholder="Pesquise por um prato..."
           />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 52,
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 50,
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 8,
        borderColor: "#64748b",
    },
    input:{
        flex: 1,
        width: "100%",
        height: "100%",
    }
})