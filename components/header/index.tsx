import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export function Header() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.iconButton}>
                <Ionicons name="menu-outline" size={24} color="black" />
            </Pressable>

            <View style={styles.locationContainer}>
                <Text style={styles.locationText}>Localização</Text>
                <View style={styles.locationRow}>
                    <Feather name="map-pin" size={18} color="#ff0000" />
                    <Text style={styles.locationBoldText}>Belo Horizonte, MG</Text>
                </View>
            </View>

            <Pressable style={styles.iconButton}>
                <Feather name="bell" size={24} color="gray" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconButton: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',   
        justifyContent: 'center',
    },
    locationContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#64748B',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    locationBoldText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});