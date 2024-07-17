import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props{
    name: string;
    size: number;
    label: string;
    action: () => void;
}

export function SectionTitleComponent({name, size, label, action}: Props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, { fontSize: size  }]} >{name}</Text>
            <TouchableOpacity onPress={action} activeOpacity={0.7} >
                <Text>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    title:{
        fontWeight: "bold",
        marginVertical: 16,
    }
})