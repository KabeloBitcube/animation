import { StyleSheet, View, TouchableOpacity, Animated, Text } from "react-native";
import { useRef, useState } from "react";

export default function Move() {
  const x = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(0)).current;
  const [step, setStep] = useState(0);

  const moveCircle = () => {
    let animation;

    switch (step) {
      case 0:
        animation = Animated.timing(x, {
          toValue: 200,
          duration: 500,
          useNativeDriver: false,
        });
        break;
      case 1:
        animation = Animated.timing(y, {
          toValue: -200,
          duration: 500,
          useNativeDriver: false,
        });
        break;
      case 2:
        animation = Animated.timing(x, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        });
        break;
      case 3:
        animation = Animated.timing(y, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        });
        break;
    }

    animation!.start(() => {
      setStep((prev) => (prev + 1) % 4);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap To Move</Text>

      <TouchableOpacity onPress={moveCircle} activeOpacity={0.8}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ translateX: x }, { translateY: y }],
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",    
  },
  text: {
    marginBottom: 20, 
    textAlign: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "grey",
    marginRight: 200,
    marginTop: 20
  },
});
