import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export const ExploreScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Text>Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})