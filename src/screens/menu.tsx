import { StyleSheet, View } from "react-native";
import { Dropdown } from '../components/index';

const options = [
  { label: 'Charts', iconName: 'barschart' },
  { label: 'Book', iconName: 'book' },
  { label: 'Calendar', iconName: 'calendar' },
  { label: 'Camera', iconName: 'camera' },
];

const header = {
  label: 'Header',
  iconName: 'elipsis1'
}

export default function Menu() {
  return (
    <View style={styles.container}>
      <Dropdown options={options} header={header} />
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