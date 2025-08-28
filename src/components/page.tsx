import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

interface PageProps {
    title: string;
    index: number;
    translateX: SharedValue<number>;
}

const { height, width } = Dimensions.get('window');

const Page: React.FC<PageProps> = ({ title, index, translateX }) => {
    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            translateX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0, 2, 0],
            Extrapolation.CLAMP
        );

        return {
            transform: [{ scale }]
        };
    });

    return (
        <View
            style={[
                styles.pageContainer,
                { backgroundColor: `rgba(100,150,200,0.${index + 2})` }, 
            ]}
        >
            <View style={{ flex: 0.5 }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Text style={[{ fontSize: 70, color: 'white', fontWeight: '700' }, animatedStyle]}>{title}</Animated.Text>
            </View>
            <View style={{ flex: 0.5 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        height,
        width,
    }
})

export default Page;