import { View, Text, Image, StyleSheet } from 'react-native';
import Separator from './Separator'

import iconeSacola from '../assets/icone-sacola.png'

export default function TopBar() {
  return <View>
  <View style={styles.container}>
    <Text style={styles.title}>Lighteria</Text>
    <View style={styles.imageContainer}>
      <Image source={iconeSacola} style={styles.image} />
    </View>
  </View>
  <Separator />
  </View>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width: 30,
    height: 30,
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 50
  }
});
