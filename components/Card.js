
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default function CardComponent(props) {
  console.log(props)
  return <View style={styles.container}>
    <Image source={props.image} style={styles.image} />
    <Text>{props.text}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.2 - 8,
    alignItems: 'center',
    margin: 8,
    padding: 16
  },
  image: {
    resizeMode: 'contain',
    width: 80,
    height: 120,
    marginBottom: 8
  }
});
