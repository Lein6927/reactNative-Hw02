import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Navigator,Image} from 'react-native';

export default function App() {






  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://images.plurk.com/3v2pCeK4ABEs7wg3dPjZwI.png' }}></Image>
      <Text style='fontSize:30'>換頁</Text>
      <StatusBar style="auto" />
    </View>
  );
}





//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 240,
    height: 180,
    resizeMode: 'stretch',
    marginLeft: 20,
  },
});
