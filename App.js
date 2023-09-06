import { Dimensions, SafeAreaView, StyleSheet } from 'react-native'
import TopBar from './components/TopBar'
import CardList from './components/CardList'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <CardList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
});
