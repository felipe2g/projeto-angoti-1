
import { StyleSheet, FlatList, View, Dimensions } from 'react-native'
import CardComponent from './Card'

import img1 from '../assets/01.png';
import img2 from '../assets/02.png'; 
import img3 from '../assets/03.png';
import img4 from '../assets/04.png';
import img5 from '../assets/05.png';
import img6 from '../assets/06.png';
import img7 from '../assets/07.png';
import img8 from '../assets/08.png';

export default function CardList() {

  const items = [
    {
      id: 1,
      image: img1,
      text: 'Abajur'
    },
    {
      id: 2,
      image: img2,
      text: 'Lampada de teto'
    },
    {
      id: 3,
      image: img3,
      text: 'Arandela'
    },
    {
      id: 4,
      image: img4,
      text: 'Luminária de chão'
    },
    {
      id: 5,
      image: img5,
      text: 'Luminária de mesa'
    },
    {
      id: 6,
      image: img6,
      text: 'Luminária maluca'
    },
    {
      id: 7,
      image: img7,
      text: 'Luminária sétima'
    },
    {
      id: 8,
      image: img8,
      text: 'Luminária última'
    },
    {
      id: 9,
      image: img7,
      text: 'Luminária sétima'
    },
    {
      id: 10,
      image: img8,
      text: 'Luminária última'
    }
  ]

  const renderCard = (item) => (
    <CardComponent key={item.id} 
      image={item.image} 
      text={item.text}  
    />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => renderCard(item)}
        horizontal={false}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red', 
    padding: 8,
  }
});
