import React, { useRef } from 'react';
import { StyleSheet, View, Text, Animated, PanResponder } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Drag() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;


  return (
    <SafeAreaView style={styles.container}>
      <Text>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        onStartShouldSetResponder={panResponder.panHandlers.onStartShouldSetResponder}
        onMoveShouldSetResponder={panResponder.panHandlers.onMoveShouldSetResponder}
        onMoveShouldSetResponderCapture={panResponder.panHandlers.onMoveShouldSetResponderCapture}
        onStartShouldSetResponderCapture={panResponder.panHandlers.onStartShouldSetResponderCapture}
        onResponderGrant={panResponder.panHandlers.onResponderGrant}
        onResponderMove={panResponder.panHandlers.onResponderMove}
        onResponderRelease={panResponder.panHandlers.onResponderRelease}
        onResponderTerminate={panResponder.panHandlers.onResponderTerminate}
        onResponderTerminationRequest={panResponder.panHandlers.onResponderTerminationRequest}
      >
        <View style={styles.box} />
      </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
})