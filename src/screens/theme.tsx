import { StyleSheet, View } from "react-native";
import { Text } from "react-native-gesture-handler";

export default function Theme() {
  return (
    <View style={styles.container}>
        <View>
            <Text>Theme</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})