import React from 'react';
import { Image, Pressable, StyleSheet, View, Dimensions } from "react-native";
import PagerView from "react-native-pager-view";

const { width } = Dimensions.get('window');

const bannerImages = [
    { id: '1', source: require('../../app/assets/banner1.png') },
    { id: '2', source: require('../../app/assets/banner2.png') }
];

export function Banner() {
   // If the screen width is greater than or equal to 768px
    const isLargeScreen = width >= 768;
    const imageHeight = isLargeScreen ? 240 : 140;

    return (
        <View style={styles.container}>
            <PagerView 
                style={{ flex: 1 }} 
                initialPage={0}
                pageMargin={14}
            >
                {bannerImages.map((banner) => (
                    <Pressable 
                        style={[styles.buttonContainer, { height: imageHeight }]} 
                        key={banner.id} 
                        onPress={() => console.log(banner.id)}
                    >
                        <Image
                            source={banner.source}
                            style={[styles.image, { height: imageHeight }]}
                            resizeMode="cover"
                        />
                    </Pressable>
                ))}
            </PagerView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 140,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 16,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
    },
});
