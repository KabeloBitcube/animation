import { StyleSheet, View } from "react-native";
import Animated, { Easing, SharedValue, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';

const SIZE = 100.0;

const handleRotation = (progress: SharedValue<number>) => {
  'worklet';

  return `${progress.value * 2 * Math.PI}rad`;
}

export default function Rotation() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);
  const rotation = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        { rotate: handleRotation(progress) },
        { scale: scale.value },
      ],
    }
  });

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 60000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[{ height: SIZE, width: SIZE, backgroundColor: 'grey' }, reanimatedStyle]} />
      <Animated.View style={[styles.clockFace, animatedStyle]}>
        {new Array(12).fill(0).map((_, index) => (
          <View
            key={index}
            style={{
              height: 12,
              aspectRatio: 1,
              backgroundColor: 'grey',
              position: 'absolute',
              transform: [
                { rotate: `${index * 30}deg` },
                { translateY: -100 },
              ],
            }}
          />
        ))}
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockFace: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
})