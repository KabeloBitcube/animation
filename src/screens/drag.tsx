import { StyleSheet, View } from "react-native";
import { Text } from "react-native-gesture-handler";

export default function Drag() {
  return (
    <View style={styles.container}>
        <View>
            <Text>Drag</Text>
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