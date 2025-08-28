import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector, Text } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function Tap() {
  const scale = useSharedValue(0);

  const tapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((_, success) => {
      "worklet";

      if (success) {
        scale.value = withSpring(scale.value === 0 ? 1 : 0, {
          damping: 10,
          stiffness: 200,
        });
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Text>Double Tap Box</Text>
      <GestureDetector gesture={tapGesture}>
        <Animated.View style={styles.body}>
          <Animated.Image
            source={require('../images/heart.png')}
            style={[styles.image, animatedStyle]}
          />
        </Animated.View>
      </GestureDetector>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#767577',
    borderRadius: 50,
    marginTop: 20,
    height: 200,
    width: 200,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    top: 50,
    left: 50,
  },
})