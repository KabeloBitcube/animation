import { StyleSheet, View, Text, Switch } from "react-native";
import React, { useState } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#3E3E3E',
    text: '#FFFFFF',
  },
  light: {
    background: '#FFFFFF',
    circle: '#E5E5E5',
    text: '#000000',
  },
}

const SWITCH_TRACK_COLOR = {
  false: "#767577",
  true: "#088d04ff"
};

type Theme = 'light' | 'dark';

export default function Theme() {
  const [theme, setTheme] = useState<Theme>('light');

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: Colors[theme].background,
    };
  });

  return (
      <Animated.View style={[styles.body, animatedStyle]}>
        <View>
          <Text style={{ color: Colors[theme].text, fontSize: 24, marginBottom: 10 }}>
            {theme === 'dark' ? 'Dark Theme' : 'Light Theme'}
          </Text>
        </View>
        <View style={[styles.circle, { backgroundColor: Colors[theme].circle }]}>
          <Switch
            value={theme === 'dark'}
            onValueChange={(isDark) => setTheme(isDark ? 'dark' : 'light')}
            trackColor={SWITCH_TRACK_COLOR}
            thumbColor={theme === 'dark' ? '#55e474ff' : '#f4f3f4'}
          />
        </View>
      </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  }
})