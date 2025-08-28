import React from 'react';
import { StyleSheet } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Page from '../components/page';

const WORDS = ["Hello", "World", "Let's", "Animate","With", "React!"];

export default function Scroll() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  })

  return (
    <Animated.ScrollView
      style={styles.container}
      horizontal
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {WORDS.map((title, index) => (
        <Page key={index} title={title} index={index} translateX={translateX} />))}
    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})