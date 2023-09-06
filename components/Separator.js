import { View, Text, StyleSheet } from 'react-native';

export default function Separator() {
  return <View style={styles.container}>
    <View style={styles.separatorLine}></View>
    <Text>Categorias</Text>
    <View style={styles.separatorLine}></View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'gray',
    width: '30%',
    margin: 16
  }
});
